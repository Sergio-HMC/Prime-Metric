import "./globals.css";

export const metadata = {
  title: "Alder Metrics",
  description: "Turning data into clear decisions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
