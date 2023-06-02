import Link from 'next/link'
import '../globals.css'
import { Open_Sans } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'
import Footer from '@/components/Footer'
import { SocialIcon } from 'react-social-icons'
import Navbar from '@/components/Navbar'

const open_Sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Craig Parfitt UI/UX',
  description: 'Craig Parfitt Portfolio focusing on UI/UX Designer',
}

export default async function RootLayout({
  children,
  }: {
    children: React.ReactNode;
  }) {

  return (
    <html lang="en">

      <body className='text-white max-w-6xl mx-auto md:py-10 centered bg-gradient-to-tr from-slate-950 from-40% via-blue-950 via-60% to-slate-950'>

        <Navbar />

        <main className='py-10'>
          {children}
        </main>

          <Footer />

      </body>
    </html>
  )
}
