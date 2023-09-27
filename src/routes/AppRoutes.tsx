import { Route, Routes } from "react-router-dom";
import { Error, Home } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Error />} path="*" />
    </Routes>
  );
}
