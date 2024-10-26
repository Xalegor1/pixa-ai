import "./globals.css";
import { Pixelify_Sans, DM_Sans } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { ViewTransitions } from "next-view-transitions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomAlert from "@/components/CustomAlert"; // Импортируем кастомный alert

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={pixelify.variable}>
        <body>
          <CustomAlert /> {/* Добавляем кастомный alert */}
          <Header />
          <main>{children}</main>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </html>
    </ViewTransitions>
  );
}
