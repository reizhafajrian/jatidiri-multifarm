import { ArrowLeft } from '@/components/shared/Icons'
import Link from 'next/link'

export const metadata = {
  title: 'Jatidiri Multifarm | Page not found',
}

export default function PageNotFound() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="space-y-2">
        <h1 className="text-5xl font-semibold">Site not found...</h1>
        <p className="text-xl">
          The site you&apos;re searching for does not exist.
        </p>
        <Link
          href="/dashboard"
          // className={buttonVariants()}
        >
          <ArrowLeft />
          <p className="capitalize">Back to Dashboard</p>
        </Link>
      </div>
    </div>
  )
}
