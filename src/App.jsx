import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import Teams from "./pages/Teams/Teams";
import Analytics from "./pages/Analytics/Analytics";
import Messages from "./pages/Messages/Messages";
import Integration from "./pages/Integration/Integration";
import Projects from "./pages/Projects/Projects";

function App() {
  const [overviews, setOverviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const overviewRes = await fetch("http://localhost:3000/overview");

        if (!overviewRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const overviewData = await overviewRes.json();

        setOverviews(overviewData);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout overviews={overviews} />}>
          <Route index element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integration" element={<Integration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
