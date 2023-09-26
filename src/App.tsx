import { Dashboard } from "./components/Dashboard";
import { Menu } from "./components/Menu";
import { Reminder } from "./components/Reminder";
import { SearchBar } from "./components/SearchBar";
function App() {
  const reminderItems = [1, 2, 3, 4, 5, 6, 7];
  return (
    <main>
      <Menu.Root>
        <Menu.Nav></Menu.Nav>
        <Menu.Aside></Menu.Aside>
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

        <div className="ml-8 w-[45vw]">calendário placeholder</div>
      </div>
    </main>
  );
}

export default App;
