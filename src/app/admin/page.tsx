"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authNew } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import withAuth from "@/components/withAuth";

type FormData = {
  email: string;
  password: string;
};

export default withAuth(function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(
        authNew,
        data.email,
        data.password
      );
      router.push("/admin/dashboard");
      setLoading(false);
    } catch (error) {
      console.error("Error signing in:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src="/logo.png" alt="admin-logo" height={180} width={180} />
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-bold text-center">Admin Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 mt-1 border border-black rounded-md"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 mt-1 border border-black rounded-md"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-medium bg-primayPink rounded-md hover:opacity-90"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
});
