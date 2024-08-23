import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { UserProvider } from "@/context/user-context";
import userGet from "@/actions/user-get";
import React from "react";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Social network for dogs",
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const { data: user } = await userGet();

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">
              {children}
            </main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserProvider>
      </body>

    </html>
  );
}
