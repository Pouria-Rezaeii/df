export interface ModalStateContextValue {
  isOpen: boolean;
  activeModalId: ModalId | null;
}
export interface ModalDispatchContextValue {
  openModal: (modalId: ModalId) => void;
  closeModal: () => void;
}

export enum ModalId {
  Test,
  Confirm,
  FileFilters,
  ImageSettings,
  SearchAndHistory,
  EstateContactInfo,
  FileSettings,
}
