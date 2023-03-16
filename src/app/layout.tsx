import { Toaster } from '@/components/shared/Toast'
import { ILayoutProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import '@/styles/react-datepicker.css'
import '@/styles/ReactToastify.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export default async function RootLayout(props: ILayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-white text-sm text-neutral-5 antialiased',
        poppins.variable
      )}
    >
      <body className="relative min-h-screen bg-neutral-1 antialiased">
        <Toaster position="top-center" />
        {props.children}
      </body>
    </html>
  )
}
