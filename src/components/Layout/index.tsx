import { Poppins } from '@next/font/google'
import Head from 'next/head'
import Header from './Header'
import Sidebar from './Sidebar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Head>
        <title>Jatidiri Multifarm</title>
        <meta name="description" content="Jatidiri Multifarm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-sm">
        <Sidebar />
        <div className="ml-64 min-h-screen bg-neutral-1 p-6">
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}
