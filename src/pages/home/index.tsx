import DownloadIcon from '@/assets/icons/download.svg'
import CardDiagram from '@/components/Dashboard/CardDiagram'
import FilterReport from '@/components/Dashboard/FilterReport'
import SectionOne from '@/components/Dashboard/SectionOne'
import SectionTwo from '@/components/Dashboard/SectionTwo'

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
        <SectionOne />
        <SectionTwo />
        <div className="grid grid-cols-12 gap-6">
          <CardDiagram className="col-span-5" title="ternak terjual">
            diagram
          </CardDiagram>
          <CardDiagram className="col-span-4" title="pendapatan event">
            diagram
          </CardDiagram>
          <CardDiagram className="col-span-3" title="penjualan susu">
            diagram
          </CardDiagram>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <CardDiagram className="col-span-5" title="data analytics">
            diagram
          </CardDiagram>
          <CardDiagram className="col-span-4" title="hewan mati">
            diagram
          </CardDiagram>
          <CardDiagram className="col-span-3" title="total kambing menyusui">
            diagram
          </CardDiagram>
        </div>
      </div>
    </main>
  )
}
