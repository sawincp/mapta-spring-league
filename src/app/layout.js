import { Inter } from "next/font/google";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "../app/components/home/SideNav";

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
        <div className="header-container">
          <h1>
            MENS SPRING LEAGUE
            <br></br>
            PADDLE 2025
          </h1>
        </div>
        <aside>
          <SideNav />
        </aside>
        <div className="content-container">
          {children}</div>
      </body>
    </html>
  );
}
