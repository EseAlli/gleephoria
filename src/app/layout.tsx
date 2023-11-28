import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Gleephoria",
  description: "Unlock the Magic of Love",
};

const ft = localFont({
  src: [
    {
      path: "./fonts/FuturaPTLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/FuturaPTBook.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FuturaPTMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FuturaPTDemi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/FuturaPTBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ft.className} relative`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
