"use client";

import Sidebar from "@/components/Sidebar";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin";
  return (
    <>
      {!isLoginPage && (
        <div className="bg-white shadow-md p-3 flex justify-between items-center fixed w-full">
          {/* Page Title */}
          {/* <h1 className="text-xl font-semibold">Admin Panel</h1> */}
          <img
            src="/textlogo/smalllogo.png"
            alt="admin-logo"
            height={120}
            width={120}
          />
          {/* Profile / Logout */}
          <div className="flex items-center">
            <button
              className="bg-red-600 hover:opacity-80 text-white p-1 rounded-md"
              title="Logout"
            >
              <LogOut />
            </button>
          </div>
        </div>
      )}
      <div className="flex pt-[72px]">
        {/* Sidebar */}
        {!isLoginPage && <Sidebar />}

        {/* Main content */}
        <div className="flex-1 p-6 ml-60">{children}</div>
      </div>
    </>
  );
}
