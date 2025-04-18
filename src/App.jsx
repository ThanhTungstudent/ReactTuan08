import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Teams from "./pages/Teams/Teams";
import Analytics from "./pages/Analytics/Analytics";
import Messages from "./pages/Messages/Messages";
import Integration from "./pages/Integration/Integration";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="teams" element={<Teams />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="integration" element={<Integration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
