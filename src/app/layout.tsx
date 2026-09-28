import "./globals.css";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--next-font-poppins",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
  variable: "--next-font-cormorant",
});

export const metadata = {
  title: "RoseHack 2027",
  description: "RoseHack 2027 hackathon at UC Riverside",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cormorant.variable} bg-rosehack-cream font-poppins text-rosehack-darkgreen`}
      >
        <ReactQueryClientProvider>
          <Navbar />
          {children}
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
