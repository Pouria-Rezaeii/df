import {useEffect} from "react";

export default function useFirstRenderEffect(cb: React.EffectCallback) {
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
