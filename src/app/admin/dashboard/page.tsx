"use client";
import withAuth from "@/components/withAuth";

export default withAuth(function DashboardPage() {
  return <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>;
});
