import { useState } from "react";
import { AppointmentCard } from "../components/AppointmentCard";
import { AppointmentForm } from "../components/AppointmentForm/AppointmentForm";
import { CalendarComponent as Calendar } from "../components/Calendar";

export default function Scheduling() {
  const [isModalVisible, setIsModalVisible] = useState(true);

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
          <div className="flex gap-2 justify-end flex-1">
            <AppointmentCard.Action onClick={() => setIsModalVisible((prevState) => !prevState)}>
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
            <AppointmentCard.Action onClick={() => console.log("clicou")}>
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
            <AppointmentCard.Action onClick={() => console.log("clicou")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                  <path
                    fillRule="evenodd"
                    d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            </AppointmentCard.Action>
          </div>
        </AppointmentCard.Root>
      </div>

      <AppointmentForm
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </section>
  );
}
