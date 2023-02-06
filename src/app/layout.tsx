import '@/styles/globals.css'
import '@/styles/react-datepicker.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

interface IProps {
  children: React.ReactNode
}

export default function RootLayout(props: IProps) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.variable} font-sans text-sm`}>
        {props.children}
      </body>
    </html>
  )
}
