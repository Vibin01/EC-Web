"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Employer", link: "/employer" },
  { name: "Candidates", link: "/candidates" },
  { name: "Recruiters", link: "/recruiters" },
  { name: "Features", link: "/features" },
  { name: "Resources", link: "/resources" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact us", link: "/contact_us" },
];

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between lg:text-[16px] xl:text-[18px] 2xl:text-[24px] px-3 lg:px-4 xl:px-6 2xl:px-8 py-4 bg-[#FFFFFF66] border-b border-[#E5E5E5] relative z-[9999]">
      <div className="flex xl:w-1/5 items-center gap-2">
        <Image
          src="/Connect_EC_Logo.png"
          alt="Logo"
          width={280}
          height={200}
          className="object-contain w-full h-auto xl:min-w-[200px] 2xl:min-w-[280px]"
        />
      </div>

      <ul className="hidden lg:flex items-center justify-evenly text-[#1B1C17] w-4/5">
        {navItems.map((item) => {
          const isActive =
            item.link === "/"
              ? pathname === "/"
              : pathname.startsWith(item.link);

          return (
            <li
              key={item.name}
              className={`${
                isActive ? "text-[#0668E1]  font-semibold" : "font-medium"
              } hover:text-[#0668E1] cursor-pointer flex flex-col justify-center items-center`}
              onClick={() => router.push(item.link)}
            >
              {item.name}
              {isActive && (
                <div className="lg:h-[4px]  2xl:h-[6px] w-[85%] bg-[#0668E1] rounded-[4px]" />
              )}
            </li>
          );
        })}
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-2 lg:gap-3 xl:gap-4">
        <button className="border border-[#0668E1] md:w-[80px]  xl:w-[110px] 2xl:w-[120px] md:h-[40px] xl:h-[60px] rounded-[32px]">
          Login
        </button>
        <button className="py-2 font-semibold bg-[#0668E1] text-white md:w-[95px]  xl:w-[125px] 2xl:w-[149px] md:h-[40px] xl:h-[60px] rounded-[32px] border">
          Register
        </button>
      </div>
    </nav>
  );
};
