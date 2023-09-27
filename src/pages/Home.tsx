import { AppointmentCard } from "../components/AppointmentCard";
import { CalendarComponent as Calendar } from "../components/Calendar";
import { Dashboard } from "../components/Dashboard";
import { Reminder } from "../components/Reminder";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  const reminderItems = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="grid grid-cols-2 w-screen ml-[100px] mt-48 p-4">
    <section className="min-w-[50vw]">
      <SearchBar />
      <div>
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <Dashboard.Root>
          <Dashboard.GrossRevenue value={20_000} />
          <div>
            <div className="mb-4">
              <Dashboard.AditionalInfo title="Agendamentos" value={40} />
            </div>
            <Dashboard.AditionalInfo title="Atendimentos" value={10} />
          </div>
        </Dashboard.Root>

        <div>
          <h2 className="text-2xl my-4">Avisos e lembretes</h2>
          <Reminder.Root>
            <Reminder.Head />
            <tbody>
              {reminderItems.map((item) => (
                <Reminder.Item key={item}></Reminder.Item>
              ))}
            </tbody>
          </Reminder.Root>
        </div>
      </div>
    </section>

    <section className="ml-8 mt-28">
      <Calendar />
      <AppointmentCard.Root>
        <AppointmentCard.Profile
          image={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
        <div className="flex flex-col">
          <AppointmentCard.Item title="Nome do paciente:" name="John Doe" />
          <AppointmentCard.Item title="CPF:" name="859.029.910-48" />
          <AppointmentCard.Item
            title="Médico responsável:"
            name="Jane Doe"
          />
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
          <AppointmentCard.Item
            title="Médico responsável:"
            name="Jane Doe"
          />
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
          <AppointmentCard.Item
            title="Médico responsável:"
            name="Jane Doe"
          />
        </div>
      </AppointmentCard.Root>
    </section>
  </div>
  )
}