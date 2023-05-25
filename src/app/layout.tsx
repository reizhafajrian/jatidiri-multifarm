import '@/styles/ReactToastify.css'
import '@/styles/globals.css'
import '@/styles/react-datepicker.css'

import { Toaster } from '@/components/shared/Toast'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { PropsWithChildren } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export default async function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-neutral-1 text-sm text-neutral-5 antialiased',
          poppins.className
        )}
      >
        <Toaster position="top-center" />
        {props.children}
      </body>
    </html>
  )
}
