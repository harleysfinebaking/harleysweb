"use client";

import Sidebar from "@/components/Sidebar";
import { authNew } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin";

  const logout = async () => {
    try {
      await signOut(authNew);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <>
      {!isLoginPage && (
        <div className="bg-white shadow-md p-3 flex justify-between items-center fixed w-full">
          <img
            src="/textlogo/smalllogo.png"
            alt="admin-logo"
            height={120}
            width={120}
          />

          <div className="flex items-center">
            <button
              className="bg-red-600 hover:opacity-80 text-white p-1 rounded-md"
              title="Logout"
              onClick={logout}
            >
              <LogOut />
            </button>
          </div>
        </div>
      )}
      <div className={`flex ${!isLoginPage ? "pt-[72px]" : ""}`}>
        {/* Sidebar */}
        {!isLoginPage && <Sidebar />}

        {/* Main content */}
        <div className={`flex-1 ${!isLoginPage ? "ml-60 p-6" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
}
