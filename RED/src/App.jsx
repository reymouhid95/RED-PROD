import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from "./Pages/Dashboard";
import Hotels from "./Pages/Hotels";
import Template from "./Layout/Template";
import SidebarComp from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import { Toaster } from "sonner";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <Template sidebar={<SidebarComp />} navbar={<NavBar />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/hotels" element={<Hotels />} />
        </Routes>
      </Template>
    </div>
  );
}

export default App;
