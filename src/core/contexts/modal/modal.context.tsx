import {PropsWithChildren, createContext, useCallback, useContext, useMemo, useState} from "react";
import {ModalStateContextValue, ModalDispatchContextValue, ModalId} from "./modal.type";

const modalStateContext = createContext<ModalStateContextValue>({
  isOpen: false,
  activeModalId: ModalId.Test,
});

const modalDispatchContext = createContext<ModalDispatchContextValue>({
  openModal: () => {},
  closeModal: () => {},
});

export function ModalContextProvider({children}: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModalId, setActiveModalId] = useState<ModalId | null>(null);

  const openModal = useCallback((modalId: ModalId) => {
    setActiveModalId(modalId);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const dispatchers = useMemo(() => {
    return {openModal, closeModal};
  }, [closeModal, openModal]);

  return (
    <modalStateContext.Provider value={{isOpen, activeModalId}}>
      <modalDispatchContext.Provider value={dispatchers}>{children}</modalDispatchContext.Provider>
    </modalStateContext.Provider>
  );
}

export const useModalState = () => useContext(modalStateContext);
export const useModalDispatch = () => useContext(modalDispatchContext);
