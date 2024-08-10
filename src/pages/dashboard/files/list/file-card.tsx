// import {usersApi} from "@api/users";
import {Skeleton} from "@mui/material";
// import {useMutation} from "@tanstack/react-query";

export default function FileCard() {
  // const {mutate: toggleBookmark, isPending: isPendingToggleBookmark} = useMutation({
  //   mutationFn: usersApi.mutations.toggleBookmark,
  // });

  return <div className="p-8 border border-gray-A100">File Card Component</div>;

  {
    /* <LoadingButton
    variant="outlined"
    className="!w-11 !p-0"
    onClick={handleToggleBookmark}
    loading={isPendingToggleBookmark}
  >
    {!isPendingToggleBookmark && (
      <img src={`/icons/${props.is_marked ? "save-minus" : "archive"}.svg`} className="!w-6" />
    )}
  </LoadingButton>; */
  }
}

export const FileCardSkeleton = () => {
  // HINT: skeleton height should be as same as cards height to prevent layout shift
  return <Skeleton variant="rectangular" className="w-full !h-[192px] rounded-default" />;
};
