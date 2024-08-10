import {breakpoints, palette} from "@configs/theme";
import {createTheme} from "@mui/material/styles";
import "./mui-theme";

const listOptionFonSize = 15;

export const muiTheme = createTheme({
  direction: "rtl",
  breakpoints: {
    values: breakpoints,
  },
  palette: {
    info: {main: palette.info},
    error: {main: palette.error},
    warning: {main: palette.warning},
    success: {main: palette.success},

    primary: palette.primary,
    secondary: palette.secondary,
    background: palette.background,
    grey: palette.gray,
  },
  typography: {
    fontFamily: "Shabnam",
    allVariants: {color: palette.gray.A700},

    h1: {fontSize: 20, fontWeight: 700},
    h2: {fontSize: 18, fontWeight: 700},
    h3: {fontSize: 16, fontWeight: 700},
    h4: {fontSize: 14, fontWeight: 700},
    h5: {fontSize: 12, fontWeight: 700},

    body1: {fontSize: 18},
    body2: {fontSize: 16},
    body3: {fontSize: 14},
    body4: {fontSize: 12},

    hint1: {fontSize: 12, fontWeight: 500, color: palette.gray.A100},
    hint2: {fontSize: 10, fontWeight: 500, color: palette.gray.A100},

    h6: undefined,
    button: undefined,
    // caption: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 24,
          boxShadow: "none",
          fontWeight: 500,
          variants: [
            {
              props: {size: "medium"},
              style: {height: 40, fontSize: 14, padding: "10px 16px"},
            },
            {
              props: {size: "small"},
              style: {height: 32, fontSize: 12},
            },
          ],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // HINT: placeholder is override in overrides.scss
          minHeight: 40,
          fontSize: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: palette.info,
              borderWidth: 1,
              boxShadow: `0 0 4px 0 ${palette.info}`,
            },
          },
          "& .MuiInputBase-root": {
            padding: 0,
          },
          "& .MuiInputBase-input": {
            padding: "10px 16px",
          },
          "& .MuiFormHelperText-root": {
            margin: "3px 0 0",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            padding: "10px 16px",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            padding: "2px 0px 2px 12px",
          },
        },
        option: {
          fontSize: listOptionFonSize,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.gray.A200,
          fontSize: 14,
          fontWeight: 700,
          marginBottom: 8,
          "&.Mui-error": {
            color: palette.error,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#fdf1f1",
          border: `.5px solid ${palette.gray[400]}`,
          borderRadius: 3,
          height: 6,
          "& .MuiLinearProgress-bar": {
            backgroundColor: palette.primary.dark,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: listOptionFonSize,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          paddingRight: "0 !important", // will apply as paddingLeft as theme ir ltr
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          "&.Mui-active *": {
            borderColor: palette.primary.dark,
            height: "1.2px !important",
          },
          "&.Mui-completed *": {
            borderColor: palette.primary.dark,
            height: "1.2px !important",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#777777",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        circle: {
          color: palette.primary.dark,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
  },
});
