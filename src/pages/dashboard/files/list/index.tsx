import FileCard, {FileCardSkeleton} from "./file-card";
import MaxWidthContainer from "@components/max-width-container";
import Pagination from "@components/pagination";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {filesApi} from "@api/files";
import NoResultMessage from "@components/no-result-message";
import useSearchParamsObject from "@hooks/use-search-params-object";
import {useEffect} from "react";
import {queryKeyEnum} from "@configs/react-query-config";
import {FilesApiFilesFileListRequest} from "@open-api";
import Loading from "@components/loading";

export default function Files({isArchivePage}: {isArchivePage?: boolean}) {
  const searchParamsObject = useSearchParamsObject<FilesApiFilesFileListRequest>();
  const queryClient = useQueryClient();

  const queryKey = isArchivePage ? queryKeyEnum.ArchivedFileList : queryKeyEnum.FileList;
  const queryFn = isArchivePage ? filesApi.queries.getArchivedFiles : filesApi.queries.getFiles;
  const page = Number(searchParamsObject.page || 1); // this will help react query caching to prevent distinguishing between page=undefined and page=1

  const {data, isLoading, isPlaceholderData} = useQuery({
    queryKey: [queryKey, {...searchParamsObject, page: page}],
    queryFn: queryFn,
    placeholderData: (prev) => prev,
  });

  useEffect(() => {
    // prefetch next page
    let timeout: NodeJS.Timeout | number;
    if (data?.next) {
      timeout = setTimeout(() => {
        queryClient.prefetchQuery({
          queryKey: [queryKey, {...searchParamsObject, page: page + 1}],
          queryFn: queryFn,
        });
      }, 5000);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <MaxWidthContainer className="pb-3">
      {isPlaceholderData && <Loading />}

      <div className="flex w-full flex-col gap-3">
        {isLoading && [1, 2, 3, 4, 5].map((i) => <FileCardSkeleton key={i} />)}

        {data && data.results.length === 0 && <NoResultMessage />}

        {data?.results.map(() => <FileCard />)}
      </div>

      <div className="mt-2">
        <Pagination count={data?.count || 0} />
      </div>
    </MaxWidthContainer>
  );
}
