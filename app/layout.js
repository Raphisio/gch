import { Archivo } from "next/font/google";
import "./globals.css";
import Nav from './ui/nav';
import Footer from "./ui/footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Global Code Harbor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <main className="w-screen min-h-screen flex flex-col items-center overflow-x-hidden">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
