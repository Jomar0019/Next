import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Homepage | Nextjs 14",
    template: "%s | Nextjs 14"
  },
  description: 'Next.js starter app desc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a23]`}>
        <div className='md:w-[1536px] mx-auto min-h-[100vh] flex flex-col justify-between'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}