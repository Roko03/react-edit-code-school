import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./routes/HomePage";
import WorkshopPage from "./routes/WorkshopPage";
import InstructorsPage from "./routes/InstructorsPage";
import AdminPage from "./routes/AdminPage";

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/radionice" element={<WorkshopPage />} />
        <Route path="/predavaci" element={<InstructorsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
