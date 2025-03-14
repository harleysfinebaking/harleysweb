"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { authNew } from "@/lib/firebase";

const withAuth = (Component: React.ComponentType) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(authNew, (user) => {
        if (!user) {
          router.push("/"); //Redirect to login if not authenticated
        }
      });

      return () => unsubscribe();
    }, [router]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
