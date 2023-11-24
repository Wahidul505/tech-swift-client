import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

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
        <Navbar />
        <div className="px-4 md:px-8 lg:px-10 pt-24 lg:pt-32 min-h-screen">
          <Providers>{children}</Providers>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
