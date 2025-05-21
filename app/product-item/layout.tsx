import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "View detailed information about our products",
};

export default function ProductItemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 