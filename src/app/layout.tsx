import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";

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
        <div className="px-5 md:px-8 lg:px-10 pt-24 lg:pt-28 pb-12 max-w-7xl mx-auto min-h-screen text-gray-800">
          <Providers>{children}</Providers>
        </div>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
