import { useState } from "react";
import { CalendarComponent as Calendar } from "./components/Calendar";
import { Dashboard } from "./components/Dashboard";
import { Menu } from "./components/Menu";
import { Reminder } from "./components/Reminder";
import { SearchBar } from "./components/SearchBar";
function App() {
  const reminderItems = [1, 2, 3, 4, 5, 6, 7];
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <main>
      <Menu.Root>
        <Menu.Nav></Menu.Nav>
        <Menu.Aside
          isOpen={isSideBarOpen}
          toggle={() => setIsSideBarOpen(!isSideBarOpen)}
        ></Menu.Aside>
        {!isSideBarOpen && (
          <div
            className="mt-[205px] ml-4 w-8 aspect-square cursor-pointer"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            title="toggle sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </div>
        )}
      </Menu.Root>
      <div className="grid grid-cols-2 w-screen ml-[100px] mt-24 p-4">
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
          <div className="ml-20 mt-4 bg-gray-300 rounded p-2 flex gap-4 w-[420px]">
            <img src="" alt="foto do paciente" className="w-20 aspect-square rounded-full bg-gray-500" />
            <div className="flex flex-col">
                <span>Nome do paciente: </span>
                <span>CPF:</span>
                <span>Médico responsável: </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
