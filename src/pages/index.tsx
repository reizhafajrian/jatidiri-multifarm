import DashboardIcon from '@/assets/icons/dashboard.svg'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jatidiri Multifarm</title>
        <meta name="description" content="Jatidiri Multifarm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid h-screen place-items-center">
        <div>
          <h1 className="text-3xl font-bold">Jatidiri Multifarm</h1>
          <DashboardIcon className="fill-primary-4 hover:fill-primary-2" />
        </div>
      </main>
    </>
  )
}
