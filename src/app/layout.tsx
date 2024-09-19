import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[#F8F8F8]`}
      >
        {children}
      </body>
    </html>
  );
}
