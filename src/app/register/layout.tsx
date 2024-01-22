import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register a new account",
  description: "Welcome to register page",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
