import {CommonProps} from "@type/common-props.type";
import {PropsWithChildren} from "react";

/** limits max width temporarily before adding desktop size styles */
export default function TemporaryWidthLimiter(props: PropsWithChildren<CommonProps>) {
  const {children} = props;
  return (
    <div className="w-full h-full max-w-[--temporary-application-max-width-before-adding-desktop-version] mx-auto">
      {children}
    </div>
  );
}
