"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ProgressBar/>
      </body>
    </html>
  )
}
