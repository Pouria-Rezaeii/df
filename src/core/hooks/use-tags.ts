import {filesApi} from "@api/files";
import {queryKeyEnum} from "@configs/react-query-config";
import {EstateTag} from "@open-api";
import {useQuery} from "@tanstack/react-query";

type TagOption = {label: string; value: number};

export default function useFileTags(): {
  isLoadingTags: boolean;
  fileTags: EstateTag[] | undefined;
  fileTagOptions: TagOption[] | undefined;
} {
  const {data, isLoading: isLoading} = useQuery({
    queryKey: [queryKeyEnum.FileTags],
    queryFn: filesApi.queries.getTags,
    staleTime: Infinity,
  });

  if (isLoading) {
    return {
      isLoadingTags: isLoading,
      fileTags: undefined,
      fileTagOptions: undefined,
    };
  } else {
    return {
      isLoadingTags: isLoading,
      fileTags: data,
      fileTagOptions: (data || []).map((t) => ({label: t.tag_name, value: t.id})),
    };
  }
}
