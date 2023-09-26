import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export function CalendarComponent() {
  return (
    <div className="px-4 w-full flex items-center justify-center first:w-full">
      <Calendar className={"w-[80%]"} defaultValue={new Date()} activeStartDate={new Date()} />
    </div>
  );
}
