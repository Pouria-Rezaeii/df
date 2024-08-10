import {routes, routesTitle} from "@constants/routes";
import {IconButton, Typography} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle = routesTitle.find((route) => route.pattern.test(location.pathname))?.title;

  return (
    <header
      className="h-[--header-height] px-[--header-padding-x] border-b border-primary-dark"
      style={{boxShadow: "var(--header-inner-shadow)"}}
    >
      <div className="w-full h-full flex justify-between items-center">
        <Typography variant="h4" className="w-2/5 !text-primary-main">
          {pageTitle}
        </Typography>

        <Link to={routes.dashboard}>
          <img src="/images/logo-mobile-4.png" className="w-[70px]" />
        </Link>

        <span className="w-2/5 text-left">
          <span className="-ml-3">
            <IconButton onClick={() => navigate(-1)}>
              <img src="/icons/arrow-left.svg" />
            </IconButton>
          </span>
        </span>
      </div>
    </header>
  );
}
