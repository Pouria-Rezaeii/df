import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useDeviceSize() {
  const {breakpoints} = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isTablet = useMediaQuery(breakpoints.between("sm", "lg"));
  const isDesktop = useMediaQuery(breakpoints.up("lg"));

  return {isMobile, isTablet, isDesktop};
}
