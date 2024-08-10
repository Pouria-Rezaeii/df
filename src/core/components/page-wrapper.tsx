import {PropsWithChildren} from "react";
import TemporaryWidthLimiter from "./temporary-width-limiter";

/** PageWrapper should only be used in pages what are going to be rendered outside of dashboard layout */
export default function PageWrapper({children}: PropsWithChildren) {
  return (
    <div
      id="dashboard-container"
      className="fixed top-0 bottom-0 left-0 right-0 overflow-y-scroll overflow-x-hidden dir-ltr"
    >
      <div className="h-full w-full dir-rtl">
        <TemporaryWidthLimiter>{children}</TemporaryWidthLimiter>
      </div>
    </div>
  );
}
