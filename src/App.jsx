import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./components/MainLayout/MainLayout"
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App