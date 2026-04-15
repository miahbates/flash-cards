import type { Metadata } from "next";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import { Providers } from "./apollo-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flash Cards",
  description: "A small flash card app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
