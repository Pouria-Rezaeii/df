import {ModalId} from "@contexts/modal/modal.type";
import ModalWrapper from ".";

interface Props {
  onClose?: () => void;
  testProp: string;
}

export default function TestModal(props: Props) {
  return (
    <ModalWrapper title="Test Modal" onClose={props.onClose} uniqueId={ModalId.Test}>
      <div>Modal Body:</div>
      <div>testProp: {props.testProp}</div>
    </ModalWrapper>
  );
}
