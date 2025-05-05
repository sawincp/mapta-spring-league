import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./components/home/sidenav";
import LoginCard from "./components/home/loginCard";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MAPTA Spring League",
  description: "Men's Spring League",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LoginCard />
        <div className="header-container">
          <h1>
            MENS SPRING LEAGUE
            <br></br>
            PADDLE 2025
          </h1>
        </div>
        <Sidenav />
        {children}
      </body>
    </html>
  );
}
