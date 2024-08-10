import {Typography} from "@mui/material";
import MaxWidthContainer from "./max-width-container";
import Footer from "./footer";
import TemporaryWidthLimiter from "./temporary-width-limiter";

export default function NoResultMessage() {
  return (
    <>
      <div className="flex flex-col">
        <MaxWidthContainer className="w-full flex flex-col justify-center items-center pt-[6vh] gap-[5vh] mb-[6vh]">
          <div className="w-[20vh] max-w-[220px] h-[20vh] max-h-[194px]">
            <img src="/images/no-result.png" />
          </div>

          <Typography variant="hint1" className="!text-[#C30000]">
            نتیجه‌ای یافت نشد!
          </Typography>
        </MaxWidthContainer>
      </div>

      <div className="w-full fixed left-0 right-0 bottom-0 flex justify-center">
        <TemporaryWidthLimiter>
          <Footer color="gray" />
        </TemporaryWidthLimiter>
      </div>
    </>
  );
}
