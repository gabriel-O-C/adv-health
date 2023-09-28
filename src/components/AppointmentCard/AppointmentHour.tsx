interface Props {
  time: string
}
export function AppointmentHour({time}: Props) {
  return (
    <div className="flex justify-center items-center text-xl">{time}</div>
  )
}

