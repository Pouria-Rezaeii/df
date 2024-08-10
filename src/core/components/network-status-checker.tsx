import {useEffect, useState} from "react";
import {toast} from "react-toastify";

const autoCloseTimeout = Number(
  import.meta.env.VITE_NETWORK_OFFLINE_ALERT_TIMEOUT_IN_SECONDS || 20,
);
export default function NetworkStatusChecker() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const offlineListener = () => {
      toast.error("ارتباط شما با اینترنت برقرار نیست.", {autoClose: autoCloseTimeout * 1000});
      setIsOnline(false);
    };

    const onlineListener = () => {
      // toast only isOnline was previously false
      if (!isOnline) {
        toast.info("ارتباط شما با اینترنت برقرار شد.");
      }
      setIsOnline(true);
    };

    window.addEventListener("offline", offlineListener);
    window.addEventListener("online", onlineListener);

    return () => {
      window.removeEventListener("offline", offlineListener);
      window.removeEventListener("online", onlineListener);
    };
  }, [isOnline]);

  return null;
}
