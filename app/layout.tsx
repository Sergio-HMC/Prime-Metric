import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prime-Metric",
  description: "Data infrastructure, automation, dashboards and analytics for better decisions.",
  icons: {
    icon: "/brand/favicon-32.png",
    shortcut: "/brand/favicon-32.png",
    apple: "/brand/favicon-180.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
