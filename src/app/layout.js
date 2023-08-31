import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react';
import { Navigation } from './components/Navigation';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'pal mundo',
  description: 'carlos  by farias WM'
}
export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Mi primer NextJs WebMid</title>
      </head>
      <body>
      <Navigation />
        {children}
      </body>
    </html>
  )
}

