import Link from 'next/link'
import '../globals.css'
import { Open_Sans } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'

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

  const pages = await getPages();

  return (
    <html lang="en">
      <body className='text-white max-w-6xl mx-auto md:py-10 centered bg-gradient-to-tr from-black from-25% via-blue-900 via-60% to-blue-950'>

        <header className='flex item-center justify-between'>
          <Link href="/"
            className='mb-10 text-lg opacity-70 hover:opacity-100 transition duration-300'>
            Craig Parfitt UI/UX Designer  -  0786 656 2170
          </Link>

          <div className='flex gap-10 text-lg'>
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className='opacity-70 hover:opacity-100 transition duration-300'>
                  {page.title}
              </Link>
            ))}
          </div>

        </header>

        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
