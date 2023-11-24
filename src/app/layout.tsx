import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glamour Reserve",
  description: "Glamour Reserve at your Makeover Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen pb-32">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
