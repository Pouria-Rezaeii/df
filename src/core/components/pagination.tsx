import useDeviceSize from "@hooks/use-device-size";
import {Pagination as MuiPagination} from "@mui/material";
import scrollToTop from "@utils/scroll-to-top";
import {memo, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

interface IProps {
  count: number;
  pageSize?: number;
}

const PAGE_SIZE = Number(import.meta.env.VITE_PAGINATION_PAGE_SIZE || 10);

export default memo(function Pagination(props: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQueryParam = searchParams.get("page");
  const [page, setPage] = useState(Number(pageQueryParam) || 1);
  const {count, pageSize = PAGE_SIZE} = props;
  const {isMobile} = useDeviceSize();

  useEffect(() => {
    setPage(Number(pageQueryParam || 1));
  }, [pageQueryParam]);

  const handleChange = (_: any, value: number) => {
    setPage(value);
    searchParams.set("page", String(value));
    setSearchParams(searchParams);
    scrollToTop();
  };

  return count <= pageSize ? null : (
    <div className="w-full flex justify-center py-4">
      <MuiPagination
        // in mui pagination count is the total number of pages but
        // the count in our custom pagination component is the total number of rows
        // coming from the server
        count={Math.ceil(count / pageSize)}
        size={isMobile ? "small" : "medium"}
        siblingCount={isMobile ? 1 : 2}
        page={page ? Number(page) : 1}
        onChange={handleChange}
        shape="rounded"
      />
    </div>
  );
});
