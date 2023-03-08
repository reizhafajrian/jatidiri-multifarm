import Toast from '@/components/shared/Toast'
import { ILayoutProps } from '@/data/interfaces'
import '@/styles/globals.css'
import '@/styles/react-datepicker.css'
import '@/styles/ReactToastify.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Jatidiri Multifarm',
  description: 'jatidiri multifarm cms',
}

export default async function RootLayout(props: ILayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans text-sm`}>
        <Toast />
        <div className="mx-auto max-w-screen-2xl bg-neutral-1">
          {props.children}
        </div>
      </body>
    </html>
  )
}
