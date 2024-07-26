import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import './globals.css'
import { Metadata } from "next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata : Metadata = {
  title: 'ossdocs',
  description: 'An open source doc platform',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
