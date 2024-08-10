import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    hint1: React.CSSProperties;
    hint2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    hint1?: React.CSSProperties;
    hint2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    hint1: true;
    hint2: true;

    h6: false;
    button: false;
    caption: false;
    subtitle1: false;
    subtitle2: false;
  }
}
