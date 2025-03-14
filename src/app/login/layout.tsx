import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Dashboard",
  description: "Login to access the dashboard",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 