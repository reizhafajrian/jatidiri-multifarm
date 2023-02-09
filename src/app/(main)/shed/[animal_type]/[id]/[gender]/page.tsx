export default async function ShedDetailPage({
  params: { animal_type, id, gender },
}: any) {
  return <div>{`#${id} ${gender} ${animal_type}`}</div>
}
