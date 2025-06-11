import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"
import Image from "next/image"
import Link from "next/link"



const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              {/* Desktop Logo */}
              <Image
                src={PFLogo.src}
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
                width={611}
                height={528}
              />
              {/* Mobile Logo */}
              <Image
                src={PFLogoIcon.src}
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
                width={612}
                height={129}
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p><Link href="/about">About</Link></p>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
