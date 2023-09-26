interface Props {
  image: string
}
export function AppointmentProfile({image}: Props) {
  return (
    <img
      src={image}
      alt="foto do paciente"
      className="w-20 aspect-square rounded-full bg-gray-500"
    />
  );
}
