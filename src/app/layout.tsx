import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Social network for dogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
