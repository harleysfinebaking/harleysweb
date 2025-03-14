"use client";

import { LayoutDashboard, MapPin, MapPinned } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Locations",
    href: "/admin/locations",
    icon: <MapPin size={20} />,
  },
  {
    name: "Outlets",
    href: "/admin/outlets",
    icon: <MapPinned size={20} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-60 h-screen bg-gray-800 text-white flex flex-col fixed">
      <nav className="py-5 flex-1 overflow-auto">
        {sidebarItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={`p-3 font-medium cursor-pointer mb-2 hover:bg-[#CBEBF2] hover:text-black ${
                pathname === item.href ? "bg-primayPink text-black " : ""
              }`}
            >
              <span className="flex items-center gap-x-4">
                {item.icon} {item.name}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
