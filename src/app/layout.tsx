import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Swift",
  description: "Tech Swift E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
