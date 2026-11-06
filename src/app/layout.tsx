import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Petals from "@/components/Petals";

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

const description =
  "UC Riverside's 24-hour women-centric hackathon, January 30–31, 2027 at Winston Chung Hall. Free to attend, open to all, no experience required.";

export const metadata: Metadata = {
  // Absolute base for share-preview URLs. Set NEXT_PUBLIC_SITE_URL if the
  // site moves to its own domain.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rosehack27.vercel.app",
  ),
  title: "RoseHack 2027",
  description,
  // The preview image itself is src/app/opengraph-image.jpg (and
  // twitter-image.jpg); Next adds the image tags from those files.
  openGraph: {
    title: "RoseHack ’27",
    description,
    siteName: "RoseHack",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoseHack ’27",
    description,
  },
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
          <Footer />
          <Petals />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
