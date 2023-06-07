import { Open_Sans } from 'next/font/google'
import '../globals.css'
const open_Sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Craig Parfitt UI/UX',
  description: 'Craig Parfitt Portfolio focusing on UI/UX Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
