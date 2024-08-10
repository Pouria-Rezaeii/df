import {axios} from "@configs/axios";
import {
  UsersApi,
  UsersApiUsersFileRecordCreateRequest,
  UsersApiUsersLoginOtpCreateRequest,
  UsersApiUsersLoginVerifyCreateRequest,
} from "@open-api";

const usersApiInstance = new UsersApi(undefined, undefined, axios);

export const usersApi = {
  queries: {
    getUserInfo: async () => {
      const {data} = await usersApiInstance.usersUserInfoRetrieve();
      return data;
    },
  },
  mutations: {
    getOtp: async (input: UsersApiUsersLoginOtpCreateRequest["LoginOtpRequest"]) => {
      const {data} = await usersApiInstance.usersLoginOtpCreate({LoginOtpRequest: input});
      return data;
    },
    confirmOtp: async (input: UsersApiUsersLoginVerifyCreateRequest["LoginVerifyRequest"]) => {
      const {data} = await usersApiInstance.usersLoginVerifyCreate({LoginVerifyRequest: input});
      return data;
    },
    toggleBookmark: async (input: {
      // this api parameters is completely different with others, don't know why
      // despite others, all params have not bundled in 1 field
      file_number: UsersApiUsersFileRecordCreateRequest["MarkFileRecordRequest"]["file_number"];
      action: "mark" | "unmark";
    }) => {
      const {data} = await usersApiInstance.usersFileRecordCreate({
        MarkFileRecordRequest: {file_number: input.file_number},
        action: input.action,
      });
      return data;
    },
  },
};
