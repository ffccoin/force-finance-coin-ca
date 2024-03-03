import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import PreloaderProvider from "./PreloaderProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const revalidate = 300;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Force Finance - Decentralized Finance (Defi) Web 3.0 Solutions | Explore Now ",
  description:
    "Discover Force Finance, your premier destination for decentralized finance (DeFi) solutions on Web 3.0. Explore our innovative DEX platform offering a range of financial services powered by blockchain technology. Join us in revolutionizing finance today!",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <PreloaderProvider>
            {children}
            <SpeedInsights />
          </PreloaderProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
