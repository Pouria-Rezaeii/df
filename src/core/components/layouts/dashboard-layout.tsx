import {usersApi} from "@api/users";
import Loading from "@components/loading";
import {ACCESS_KEY} from "@constants/local-storage-keys";
import {routes} from "@constants/routes";
import {useAuth} from "@contexts/auth.context";
import {useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Header from "./header";
import PageWrapper from "@components/page-wrapper";

export default function DashboardLayout() {
  const {setUser, isPending, setIsPending} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem(ACCESS_KEY);

  useEffect(() => {
    if (!accessToken) {
      navigate(routes.auth);
    } else {
      usersApi.queries.getUserInfo().then((res) => {
        setUser(res);
        setIsPending(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isPending) {
    return (
      <PageWrapper>
        <Loading />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {
        // dashboard route has a slightly different layout from its sub pages
        location.pathname === routes.dashboard ? (
          <Outlet />
        ) : (
          <div className="h-full">
            <div className="fixed top-0 left-0 right-0 bg-white z-50">
              <Header />
            </div>
            <div
              // HINT padding bottom is applied in each page which needs to it based on the design
              style={{
                height: "100%",
                paddingTop:
                  "calc(var(--header-height) + var(--dashboard-layout-content-box-padding-t))",
              }}
            >
              <Outlet />
            </div>
          </div>
        )
      }
    </PageWrapper>
  );
}
