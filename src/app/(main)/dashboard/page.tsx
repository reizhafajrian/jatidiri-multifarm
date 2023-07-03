import DateFilter from "@/components/ui/date-filter"
import Content from "@/components/dashboard/content"

export default function Page() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <DateFilter label="Show" />
      </div>
      <Content />
    </>
  )
}
