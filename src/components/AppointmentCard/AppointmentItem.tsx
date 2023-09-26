interface Props {
  name: string;
  title: string;
}
export function AppointmentItem({ name, title }: Props) {
  return (
    <span>
      {title} {name}{" "}
    </span>
  );
}
