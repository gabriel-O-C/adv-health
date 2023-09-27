import { AppointmentCard } from "../components/AppointmentCard";
import { CalendarComponent as Calendar } from "../components/Calendar";

export default function Scheduling() {
  return (
    <section className="grid grid-cols-2">
      <div className="max-w-[50vw]">
        <h1>Médicos</h1>
        <AppointmentCard.Root>
          <AppointmentCard.Profile
            image={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
          />
          <div className="flex flex-col">
            <AppointmentCard.Item title="Nome do paciente:" name="John Doe" />
            <AppointmentCard.Item title="CPF:" name="859.029.910-48" />
            <AppointmentCard.Item title="Médico responsável:" name="Jane Doe" />
          </div>
        </AppointmentCard.Root>
        <AppointmentCard.Root>
          <AppointmentCard.Profile
            image={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
          />
          <div className="flex flex-col">
            <AppointmentCard.Item title="Nome do paciente:" name="John Doe" />
            <AppointmentCard.Item title="CPF:" name="859.029.910-48" />
            <AppointmentCard.Item title="Médico responsável:" name="Jane Doe" />
          </div>
        </AppointmentCard.Root>
        <AppointmentCard.Root>
          <AppointmentCard.Profile
            image={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
          />
          <div className="flex flex-col">
            <AppointmentCard.Item title="Nome do paciente:" name="John Doe" />
            <AppointmentCard.Item title="CPF:" name="859.029.910-48" />
            <AppointmentCard.Item title="Médico responsável:" name="Jane Doe" />
          </div>
        </AppointmentCard.Root>
      </div>
      <Calendar />
    </section>
  );
}
