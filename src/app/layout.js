import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carcure",
  description: "This is the official page of carcure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black overflow-x-hidden">
      <body className={inter.className}>
        <main className="font-custom">{children}</main>
      </body>
    </html>
  );
}
