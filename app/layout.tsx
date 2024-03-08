import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";


export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone built with Next.js and Tailwind CSS",
};

const font = Nunito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 


{
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Modal isOpen title="Hello World"/>
        <Navbar />
        </ClientOnly>
        
        {children}
        </body>
    </html>
  );
}
