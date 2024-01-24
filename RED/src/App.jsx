import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Template from "./Layout/Template";
import SidebarComp from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <Template sidebar={<SidebarComp />} navbar={<NavBar />}>
        <Outlet />
      </Template>
    </div>
  );
}

export default App;
