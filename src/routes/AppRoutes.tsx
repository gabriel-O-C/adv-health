import { Route, Routes } from "react-router-dom";
import { Error, Home, Scheduling } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Scheduling />} path="/agendamento" />
      <Route element={<Error />} path="*" />
    </Routes>
  );
}
