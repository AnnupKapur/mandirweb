import './globals.css';
import Navbar from '@lib/components/Navbar/Navbar';
import { Noto_Sans_Display } from 'next/font/google'

export const metadata = {
  title: 'Durga Bhawan',
  description: 'Durga Bhawan Mandir Smethwick',
}

const notoSansDisplay = Noto_Sans_Display({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansDisplay.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
