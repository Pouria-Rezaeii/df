import {routes} from "@constants/routes";
import {useAuth} from "@contexts/auth.context";
import {Button, Typography} from "@mui/material";
import {RoleNameEnum} from "@open-api";
import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";

type Props = {
  role: RoleNameEnum | RoleNameEnum[];
};
export function Guard({role, children}: PropsWithChildren<Props>) {
  const {user} = useAuth();
  const roleArray = Array.isArray(role) ? role : [role];

  return user && roleArray.includes(user.role_name) ? children : null;
}

export function RouteGuard({role, children}: PropsWithChildren<Props>) {
  const {user} = useAuth();
  const roleArray = Array.isArray(role) ? role : [role];

  return user && roleArray.includes(user.role_name) ? (
    children
  ) : (
    <div className="w-full flex flex-col justify-center items-center pt-44 px-4 gap-6 ">
      <Typography variant="h2" className="!text-error">
        شما اجازه دسترسی به این صفحه را ندارید
      </Typography>
      <Link to={routes.dashboard} replace>
        <Button variant="outlined" color="primary">
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </div>
  );
}
