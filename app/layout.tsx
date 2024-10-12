import Navigation from "./components/navigation/Navigation";
import { AuroraBackground } from "./components/ui/aurora-background";
import { Footer } from "./components/ui/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "チロリアン ポッポリ",
  description: "とびきり楽しいアルペンミュージックを！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <AuroraBackground>
          {children}
        </AuroraBackground>
        <Footer />
      </body>
    </html>
  );
}
