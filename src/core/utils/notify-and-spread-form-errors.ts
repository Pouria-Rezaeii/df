import {AxiosError} from "axios";
import {toast} from "react-toastify";
import flatOneLevelNestedObject from "./flat-one-level-nested-object";
import isPlainObject from "./is-plain-object";
import {UseFormSetError} from "react-hook-form";

export default function notifyAndSpreadFormErrors(
  serverError: AxiosError,
  setError: UseFormSetError<any>,
  translationObject: Record<string, string>,
) {
  const errorBody = serverError.response?.data || {};

  if (isPlainObject(errorBody) && Object.keys(errorBody).length) {
    const flatBody = flatOneLevelNestedObject(errorBody);

    for (const key in flatBody) {
      const errorMessage = flatBody[key as keyof typeof flatBody][0];
      toast.error(`${translationObject[key]}: ${errorMessage}`);

      setError(key, {
        message: errorMessage,
      });
    }
  }
}
