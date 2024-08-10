import {useModalState, useModalDispatch} from "@contexts/modal/modal.context";
import {ModalId} from "@contexts/modal/modal.type";
import useDeviceSize from "@hooks/use-device-size";
import {Dialog, IconButton, Typography} from "@mui/material";
import {PropsWithChildren, useRef} from "react";
import {Sheet, SheetRef} from "react-modal-sheet";
import {SheetProps} from "./sheet.type";

interface Props {
  title: string;
  uniqueId: ModalId;
  onOpen?: () => void;
  onClose?: () => void;
  sheetProps?: SheetProps;
}

export default function ModalWrapper(props: PropsWithChildren<Props>) {
  const {title, children, onClose, onOpen, uniqueId, sheetProps} = props;
  const {isOpen: _isOpen, activeModalId} = useModalState();
  const {closeModal} = useModalDispatch();
  const {isMobile} = useDeviceSize();
  const ref = useRef<SheetRef>();
  const isOpen = _isOpen && activeModalId === uniqueId;

  const handleClose = () => {
    closeModal();
    onClose?.();
  };

  if (!isMobile) {
    return (
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{elevation: 8}}
        classes={{paper: "pt-8 pb-6 px-6 min-w-[350px] "}}
        onLoad={onOpen}
      >
        <div className="relative">
          <div className="text-center font-bold text-lg">{title}</div>
          <button
            onClick={handleClose}
            className="absolute right-0 top-[50%] -translate-y-[50%] border p-1 px-1.5"
          >
            &#x2715;
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </Dialog>
    );
  } else {
    // TODO fix the issue (sheet does not reopen on mobile devices)
    // temporary hack: using isOpen check to mount and unmounting the component without animation
    return !isOpen ? null : (
      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={handleClose}
        onOpenStart={onOpen}
        detent="content-height"
        snapPoints={[0.9]}
        {...sheetProps}
      >
        <Sheet.Backdrop
          style={{backgroundColor: "#00000088"}}
          onTap={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleClose?.();
          }}
        />
        <Sheet.Container>
          <Sheet.Header className="h-[50px] shrink-0 px-4 py-[13px] flex items-center rounded-t-default justify-between bg-primary-dark overflow-hidden shadow-0.4.4.0.25">
            <IconButton onClick={handleClose}>
              <img src="/icons/arrow-square-down.svg" />
            </IconButton>
            <Typography variant="h3" color="white" align="center">
              {title}
            </Typography>
            <span className="w-[50px]" />
          </Sheet.Header>

          <Sheet.Content style={{paddingBottom: ref.current?.y}}>
            <Sheet.Scroller
              id="sheet-scrollable-container"
              draggableAt="both"
              className="no-scrollbar"
            >
              <div className="px-4 py-5">{children}</div>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    );
  }
}
