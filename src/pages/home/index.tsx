import DownloadIcon from '@/assets/icons/download.svg'
import Card from '@/components/Card'
import FilterReport from '@/components/FilterReport'

export default function Home() {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <FilterReport />
        <button className="flex items-center gap-1 rounded-xl border border-[#C4C4C4] bg-white py-1 px-2 text-xs font-medium uppercase hover:bg-primary-4 hover:fill-white hover:text-white">
          <DownloadIcon className="h-4 w-4" />
          download
        </button>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-7">
          <Card>total pendapatan</Card>
          <Card>total pembelian</Card>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <Card>sapi</Card>
          <Card>domba</Card>
          <Card>kambing</Card>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-5">Ternak Terjual</Card>
          <Card className="col-span-4">Pendapatan Event</Card>
          <Card className="col-span-3">Penjualan Susu</Card>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-5">Data Analytics</Card>
          <Card className="col-span-4">Hewan Mati</Card>
          <Card className="col-span-3">Total kambing Menyusui</Card>
        </div>
      </div>
    </main>
  )
}
