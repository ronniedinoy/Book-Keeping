import type { Metadata } from "next";
import Navigator from "../app/Navigator/page";
import Footer from "../app/components/Footer/page";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iCESPAPAGE",
  description: "iCESPA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className="flex flex-col bg-[#20131d] min-h-screen"> */}
      <body className="flex flex-col bg-[#49998B] min-h-screen">
        <div>
          <Navigator />
        </div>

        <div className="h-scren w-screen flex justify-center items-center my-auto mx-auto">
          {children}
        </div>

        <div className="bg-[#157767] text-gray-500 sticky py-2">
          <Footer />
        </div>
      </body>
    </html>
  );
}
