import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Admin",
  description: "Admin - Dat anh Shoe",
};
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>

    {children}

  </div>;
}
