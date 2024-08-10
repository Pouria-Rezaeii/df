import {BrowserRouter} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {ToastContainer} from "react-toastify";
import Routes from "@core/routes";
import {ThemeProvider as MuiThemeProvider} from "@mui/material/styles";
import {muiTheme} from "@configs/mui-theme";
import {toastConfig} from "@configs/toast-config";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {queryClientOptions} from "@configs/react-query-config";
import {ModalContextProvider} from "@contexts/modal/modal.context";
import {ConfirmContextProvider} from "@contexts/confirm.context";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import AuthContextProvider from "@contexts/auth.context";
import NetworkStatusChecker from "@components/network-status-checker";

export default function App() {
  const queryClient = new QueryClient(queryClientOptions);
  const cacheRtl = createCache({key: "muirtl", stylisPlugins: [prefixer, rtlPlugin]});

  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ToastContainer {...toastConfig} />
        <NetworkStatusChecker />
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <ModalContextProvider>
              <ConfirmContextProvider>
                <BrowserRouter>
                  <Routes />
                </BrowserRouter>
              </ConfirmContextProvider>
            </ModalContextProvider>
          </AuthContextProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
}
