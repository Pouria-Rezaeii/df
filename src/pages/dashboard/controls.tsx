import {Guard} from "@components/guard";
import {ACCESS_KEY} from "@constants/local-storage-keys";
import {routes} from "@constants/routes";
import {useAuth} from "@contexts/auth.context";
import {useConfirm} from "@contexts/confirm.context";
import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {RoleNameEnum} from "@open-api";

export default function Controls() {
  const {setUser} = useAuth();
  const navigate = useNavigate();
  const confirm = useConfirm();

  const handleLogout = () => {
    confirm({
      title: "خروج از حساب",
      question: "آیا قصد خروج از حساب را دارید؟",
      confirmButtonText: "خروج",
    }).then(() => {
      setUser(null);
      localStorage.removeItem(ACCESS_KEY);
      navigate(routes.auth);
      // TODO call logout api
      window.location.reload();
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Guard role={[RoleNameEnum.God, RoleNameEnum.Operator]}>
        <Link to={routes.createFile} className="col-span-full">
          <Button variant="contained">ایجاد آگهی جدید</Button>
        </Link>
      </Guard>

      <Guard role={RoleNameEnum.Agent}>
        <Link to={routes.files} className="col-span-full">
          <Button variant="contained">فایلینگ</Button>
        </Link>
      </Guard>

      <Button variant="outlined" onClick={handleLogout}>
        خروج از حساب
      </Button>

      <Guard role={[RoleNameEnum.God, RoleNameEnum.Operator]}>
        <Link to={routes.files}>
          <Button variant="outlined">لیست آگهی‌ها</Button>
        </Link>
      </Guard>

      <Guard role={RoleNameEnum.Agent}>
        <Link to={routes.archive}>
          <Button variant="outlined">بایگانی</Button>
        </Link>
      </Guard>
    </div>
  );
}
