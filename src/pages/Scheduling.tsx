import { useState } from "react";
import { AppointmentCard } from "../components/AppointmentCard";
import { AppointmentForm } from "../components/AppointmentForm/AppointmentForm";
import { CalendarComponent as Calendar } from "../components/Calendar";
import { Modal } from "../components/Modal/Modal";
import appointments from "../data/scheduled.json";
import toast from "../utils/toast";

export default function Scheduling() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);

  function handleConfirmDeletion() {
    setIsDeletionModalOpen((prevState) => !prevState);
  }

  function handleDeleteAppointment(id: number) {
    const newAppointments = filteredAppointments.filter(
      (appointment) => id !== appointment.id
    );
    setFilteredAppointments(newAppointments);
    handleConfirmDeletion();
    toast({
      text: "Consulta cancelada com sucesso!",
      type: "success",
    });
  }

  return (
    <section className="grid grid-cols-2">
      <div className="max-w-[50vw] flex flex-col items-start justify-center gap-4">
        <div className=" ml-8 lg:ml-[85px] xl:ml-20 2xl:ml-28 3xl:ml-36">
          <h1 className="text-2xl w-fit">Médicos</h1>

          <AppointmentCard.Root>
            <AppointmentCard.Profile
              image={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            />
            <div className="flex flex-col">
              <AppointmentCard.Item title="CPF:" name="859.029.910-48" />
              <AppointmentCard.Item title="Nome:" name="Jane Doe" />
            </div>
          </AppointmentCard.Root>
          <AppointmentCard.Root>
            <AppointmentCard.Profile
              image={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            />
            <div className="flex flex-col">
              <AppointmentCard.Item title="CPF:" name="859.029.910-48" />
              <AppointmentCard.Item title="Nome:" name="Jane Doe" />
            </div>
          </AppointmentCard.Root>
          <AppointmentCard.Root>
            <AppointmentCard.Profile
              image={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            />
            <div className="flex flex-col">
              <AppointmentCard.Item title="CPF:" name="859.029.910-48" />
              <AppointmentCard.Item title="Nome:" name="Jane Doe" />
            </div>
          </AppointmentCard.Root>
        </div>
        <Calendar />
      </div>

      <div>
        {filteredAppointments.map((appointment) => (
          <AppointmentCard.Root key={appointment.id}>
            <AppointmentCard.Hour time={appointment.scheduled_time} />
            <AppointmentCard.Profile
              image={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            />
            <div className="flex flex-col">
              <AppointmentCard.Item title="CPF:" name={appointment.cpf} />
              <AppointmentCard.Item title="Nome:" name={appointment.name} />
            </div>
            <div className="flex gap-2 justify-end flex-1">
              <AppointmentCard.Action
                onClick={() => setIsModalVisible((prevState) => !prevState)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
                  />
                </svg>
              </AppointmentCard.Action>
              <AppointmentCard.Action onClick={handleConfirmDeletion}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                  />
                </svg>
              </AppointmentCard.Action>
            </div>
            {isDeletionModalOpen && (
              <Modal
                visible={isDeletionModalOpen}
                onConfirm={() => handleDeleteAppointment(appointment.id)}
                onCancel={handleConfirmDeletion}
                title="Você tem certeza que quer cancelar essa consulta?"
                cancelLabel="Não"
                confirmLabel="Sim"
                key={appointment.id}
              ></Modal>
            )}
          </AppointmentCard.Root>
        ))}
      </div>

      <AppointmentForm
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </section>
  );
}
