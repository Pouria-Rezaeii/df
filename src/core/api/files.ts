import {axios} from "@configs/axios";
import {
  FilesApi,
  FilesApiFilesFileCreateRequest,
  FilesApiFilesFileDestroyRequest,
  FilesApiFilesFileListRequest,
  FilesApiFilesFileRetrieveRequest,
  FilesApiFilesFileUpdateRequest,
} from "@open-api";
import {QueryInput} from "./type";

const filesApiInstance = new FilesApi(undefined, undefined, axios);

export const filesApi = {
  queries: {
    getFile: async ({queryKey}: QueryInput<FilesApiFilesFileRetrieveRequest>) => {
      const {data} = await filesApiInstance.filesFileRetrieve(queryKey[1]);
      return data;
    },
    getFiles: async ({queryKey}: QueryInput<FilesApiFilesFileListRequest>) => {
      const {data} = await filesApiInstance.filesFileList(queryKey[1]);
      return data;
    },
    getArchivedFiles: async ({queryKey}: QueryInput<FilesApiFilesFileListRequest>) => {
      const {data} = await filesApiInstance.filesFileList({bookmarked: true, ...queryKey[1]});
      return data;
    },
    getTags: async () => {
      const {data} = await filesApiInstance.filesTagList();
      return data;
    },
  },
  mutations: {
    createFile: async (input: FilesApiFilesFileCreateRequest["FileRecordRequest"]) => {
      const {data} = await filesApiInstance.filesFileCreate({FileRecordRequest: input});
      return data;
    },
    updateFile: async (input: {
      file_number: FilesApiFilesFileUpdateRequest["file_number"];
      data: FilesApiFilesFileUpdateRequest["FileRecordRequest"];
    }) => {
      const {data} = await filesApiInstance.filesFileUpdate({
        file_number: input.file_number,
        FileRecordRequest: input.data,
      });
      return data;
    },
    deleteFile: async (input: FilesApiFilesFileDestroyRequest) => {
      const {data} = await filesApiInstance.filesFileDestroy(input);
      return data;
    },
  },
};
