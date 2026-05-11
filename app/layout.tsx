import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vertical Bike Racks in Australia – JB Racks",
  description: "We compared six of the most popular vertical bike racks available in Australia — including price, weight, capacity, warranty and usability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
