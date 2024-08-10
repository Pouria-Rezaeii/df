import {useAuth} from "@contexts/auth.context";
import {LinearProgress, Typography} from "@mui/material";
import {RoleNameEnum as Role} from "@open-api";

const DEFAULT_USER_NAMES = {
  [Role.Agent]: "مشاور دفترفایل",
  [Role.Operator]: "اپراتور دفترفایل",
  [Role.God]: "مدیریت دفترفایل",
  [Role.Supporter]: "ناظر دفترفایل",
};

export default function InfoCard() {
  const {user} = useAuth();

  const userInfo = {
    name: user?.full_name,
    company: user?.company_name || DEFAULT_USER_NAMES[user!.role_name],
    whole: user?.subscription_days ? Number(user?.subscription_days) : 100,
    remaining: user?.remaining_subscription_days ? Number(user?.remaining_subscription_days) : 60,
    city: user?.cities_access?.join(", "),
  };

  return (
    <div className="w-full p-[14px] rounded-default border border-gray-500 shadow-0.0.4.0.25">
      <div className="relative py-[6px] flex gap-2">
        <img src="/images/user-avatar.png" className="w-[80px] h-[80px] rounded-full" />

        <div className="flex flex-col justify-center gap-2">
          <Typography variant="body4">{userInfo.name}</Typography>
          <Typography variant="body4">{userInfo.company}</Typography>
        </div>

        <div className="absolute top-0 left-0 flex items-center gap-1">
          <Typography variant="hint2">{userInfo.city}</Typography>
          <img src="/icons/location.svg" />
        </div>
      </div>
      {user?.role_name === Role.Agent && (
        <>
          <hr className="my-3" />

          <div className="max-w-[155px] mx-auto flex flex-col text-center gap-2">
            <LinearProgress
              variant="determinate"
              value={(userInfo.remaining / userInfo.whole) * 100}
            />
            <Typography variant="body4">{userInfo.remaining} روز باقی‌مانده</Typography>
          </div>
        </>
      )}
    </div>
  );
}
