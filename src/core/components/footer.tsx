import {Link} from "react-router-dom";

const SUPPORT_PHONE = import.meta.env["VITE_SUPPORT_PHONE"];
const SUPPORT_EMAIL = import.meta.env["VITE_SUPPORT_EMAIL"];

export default function Footer({color}: {color?: "natural" | "gray"}) {
  return (
    <div className="w-full text-center">
      <p className="text-sm font-bold mb-2.5">
        ارتباط با تیم فنی <span className="text-primary-main">دفترفایل</span>:
      </p>
      <div className="inline-flex gap-2.5">
        {[
          {icon: "/icons/call.svg", content: SUPPORT_PHONE, href: `tel:${SUPPORT_PHONE}`},
          {icon: "/icons/sms.svg", content: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}`},
        ].map((i) => (
          <Link key={i.href} to={i.href}>
            <div className="flex items-center gap-0.5">
              <span className="text-sm font-medium font-sans">{i.content}</span>
              <img src={i.icon} />
            </div>
          </Link>
        ))}
      </div>
      <div
        className={`h-[157px] ${color === "gray" ? "bg-[url('/images/footer-gray.jpg')] bg-contain" : "bg-[url('/images/footer.png')] bg-contain"}`}
      />
    </div>
  );
}
