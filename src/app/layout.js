import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/utilities/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "animelist",
  description: "website hahahihi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
// children adalah page js default sudah di wrapss
