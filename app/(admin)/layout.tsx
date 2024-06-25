import AdminLayoutContent from "@/components/admin-components/common/AdminLayout";
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
  return <>
    <AdminLayoutContent>
      <div className="p-4">
        {children}
        {/* max each card content is w-60 */}
      </div>
    </AdminLayoutContent>

  </>;
}
