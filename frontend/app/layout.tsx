import type { Metadata } from "next";
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
