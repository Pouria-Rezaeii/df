import Footer from "@components/footer";
import MaxWidthContainer from "@components/max-width-container";
import Controls from "./controls";
import InfoCard from "./info-card";
import {useQueryClient} from "@tanstack/react-query";
import {filesApi} from "@api/files";
import {queryKeyEnum} from "@configs/react-query-config";

export default function Dashboard() {
  const queryClient = useQueryClient();

  queryClient.prefetchQuery({
    queryKey: [queryKeyEnum.FileList, {page: 1}],
    queryFn: filesApi.queries.getFiles,
  });

  return (
    <div className="h-full flex flex-col">
      <MaxWidthContainer className="flex flex-col pt-8 pb-12">
        {/* HINT image container height should be as same as image height */}
        <div className="h-[97px] flex justify-center">
          <img src="/images/logo-mobile-4.png" alt="dafter-file" />
        </div>
        <div className="w-full mt-8">
          <InfoCard />

          <div className="mt-[50px] px-[14px]">
            <Controls />
          </div>
        </div>
      </MaxWidthContainer>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
