import {routes} from "@constants/routes";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Footer from "./footer";
import MaxWidthContainer from "./max-width-container";
import PageWrapper from "./page-wrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="h-full flex flex-col">
        <MaxWidthContainer className="w-full flex flex-col justify-center items-center pt-12 gap-8 mb-10">
          <div className="h-[112px] flex justify-center">
            <img src="/images/logo-mobile-4.png" alt="dafter-file" />
          </div>

          <div className="w-[220px] h-[241px]">
            <img src="/images/not-found.png" />
          </div>

          <Typography variant="hint1" className="!text-[#C30000]">
            صفحه مورد نظر یافت نشد!
          </Typography>

          <Link to={routes.dashboard} replace>
            <Button variant="outlined" className="w-[270px]">
              برگشت به صفحه اصلی
            </Button>
          </Link>
        </MaxWidthContainer>

        <div className="w-full mt-auto">
          <Footer color="gray" />
        </div>
      </div>
    </PageWrapper>
  );
}
