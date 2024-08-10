import {CommonProps} from "@type/common-props.type";
import clsx from "clsx";
import {PropsWithChildren} from "react";

export default function MaxWidthContainer(props: PropsWithChildren<CommonProps>) {
  const {children, className} = props;
  return (
    <div
      className={clsx(
        "w-full px-[--container-padding-x] max-w-[--container-max-width] mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
