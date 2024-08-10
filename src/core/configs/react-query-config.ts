import {QueryClientConfig} from "@tanstack/react-query";

export const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 20 * 1000,
      retry: 0,
    },
  },
};

export enum queryKeyEnum {
  File = "file",
  FileList = "files",
  ArchivedFileList = "bookmarked-files",
  Cities = "cities",
  Districts = "districts",
  FileTags = "file-tags",
}
