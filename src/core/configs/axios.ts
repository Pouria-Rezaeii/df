import defaultAxios, {AxiosError} from "axios";
import {SERVER_BASE_URL} from "@constants/server-base-url";
import {toast} from "react-toastify";
import {ACCESS_KEY} from "@constants/local-storage-keys";

export const axios = defaultAxios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 20 * 1000,
});

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem(ACCESS_KEY);
    config.headers.Authorization = token ? `Bearer ${token}` : undefined;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    const status = error.response?.status;
    if (error.response?.status === 404) {
      // 404 should be handled based on each scenario in components
    } else if (status === 401) {
      localStorage.removeItem(ACCESS_KEY);
      toast.error("لطفا مجددا وارد حساب کاربری خود شوید.");
      window.location.reload();
    } else if (status === 403) {
      toast.error("شما اجازه انجام این عملیات را ندارید .");
    } else if (error.response?.status === 400) {
      // 400 should be handled in forms component
    } else if (status === undefined) {
      // probably timeout error
      toast.error("پاسخی از سرور دریافت نشد، لطفا مجددا تلاش کنید.");
    } else {
      toast.error("خطای سیستمی، لطفا بعدا مجددا تلاش کنید.");
    }
    return Promise.reject(error);
  },
);
