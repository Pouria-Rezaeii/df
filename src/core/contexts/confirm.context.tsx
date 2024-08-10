import ModalWrapper from "@components/modal-wrapper";
import {PropsWithChildren, createContext, useCallback, useContext, useRef, useState} from "react";
import {ModalId} from "./modal/modal.type";
import {useModalDispatch} from "./modal/modal.context";
import {Button, Typography} from "@mui/material";

type ConfirmProps = {
  title?: string;
  question?: string;
  confirmButtonText?: string;
  rejectButtonText?: string;
  confirmButtonPosition?: "left" | "right";
};

const DEFAULT: Required<ConfirmProps> = {
  title: "تایید",
  question: "آیا از انجام این عملیات اطمینان دارید؟",
  confirmButtonText: "تایید",
  rejectButtonText: "انصراف",
  confirmButtonPosition: "left",
};

type ContextValue = (props?: ConfirmProps) => Promise<void>;
const confirmContext = createContext<ContextValue>(() => new Promise(() => {}));

export function ConfirmContextProvider({children}: PropsWithChildren) {
  const [config, setConfig] = useState<Required<ConfirmProps>>(DEFAULT);
  const {openModal, closeModal} = useModalDispatch();
  const resolveRef = useRef<((value: void | PromiseLike<void>) => void) | null>();
  const rejectRef = useRef<((reason?: any) => void) | null>();

  const confirm = useCallback(
    (props?: ConfirmProps) => {
      setConfig({
        title: props?.title || DEFAULT.title,
        question: props?.question || DEFAULT.question,
        confirmButtonText: props?.confirmButtonText || DEFAULT.confirmButtonText,
        rejectButtonText: props?.rejectButtonText || DEFAULT.rejectButtonText,
        confirmButtonPosition: props?.confirmButtonPosition || DEFAULT.confirmButtonPosition,
      });
      openModal(ModalId.Confirm);

      return new Promise<void>((resolve, reject) => {
        // storing resolve and reject for later use
        resolveRef.current = resolve;
        rejectRef.current = reject;
      });
    },
    [openModal],
  );

  const handleAccept = () => {
    closeModal();
    resolveRef.current?.();
  };

  const handleReject = () => {
    closeModal();
    rejectRef.current?.();
  };

  return (
    <confirmContext.Provider value={confirm}>
      {children}
      <ModalWrapper title={config.title} uniqueId={ModalId.Confirm} onClose={handleReject}>
        <div>
          <Typography variant="body2" className="!mt-[32px] !mb-[44px] text-center">
            {config.question}
          </Typography>

          <hr className="my-2.5" />

          <div className="grid grid-cols-2 gap-4 px-3.5">
            <Button onClick={handleReject} variant="contained" color="secondary">
              {config.rejectButtonText}
            </Button>
            <Button
              onClick={handleAccept}
              variant="outlined"
              style={{order: config.confirmButtonPosition === "right" ? -1 : 1}}
            >
              {config.confirmButtonText}
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </confirmContext.Provider>
  );
}

export const useConfirm = () => useContext(confirmContext);
