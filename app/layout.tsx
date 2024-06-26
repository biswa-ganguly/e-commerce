import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider,  SignInButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";
import "./globals.css";
import { ModalProvider } from "@/provider/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang='en'>
      <body className={inter.className}>
        <ModalProvider/>
        {children}
        </body>
    </html>
  </ClerkProvider>
  );
}
