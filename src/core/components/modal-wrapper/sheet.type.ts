// copied from the package (it is not exported from the package itself)
export interface SheetProps {
  snapPoints?: number[];
  initialSnap?: number;
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
  onSnap?: (index: number) => void;
}
