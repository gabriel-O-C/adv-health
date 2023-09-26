interface Props {
  title: string
  value: number
}
export function DashboardAditionalInfo({title, value,}: Props) {
  return (
    <div className="bg-gray-500 w-full aspect-video flex items-center justify-center text-white">
      <span className="mr-1">{title}</span>
      no dia: {value}
    </div>
  )
}