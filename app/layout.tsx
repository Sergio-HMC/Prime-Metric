import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prime-Metric",
  description: "Data infrastructure, automation, dashboards and analytics for better decisions.",
  icons: {
    icon: "/brand/prime-metric-logo-square.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
