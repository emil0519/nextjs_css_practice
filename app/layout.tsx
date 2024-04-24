import "./globals.css";
import { nanoSans } from "./ui/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nanoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
