import "./globals.css";
import { Inter } from "next/font/google";
import connect from "@/lib/mongoose";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El Fogon Llanero",
  description: "El fogon llanero restaurante de carnes en bogota",
};

export default async function RootLayout({ children }) {
  await connect();
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
