import { ILayoutProps } from '@/data/interfaces'
import '@/styles/globals.css'
import '@/styles/react-datepicker.css'
import { Poppins } from '@next/font/google'
import 'react-toastify/dist/ReactToastify.min.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export default function RootLayout(props: ILayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.variable} font-sans text-sm`}>
        <div className="mx-auto max-w-screen-2xl">{props.children}</div>
      </body>
    </html>
  )
}
