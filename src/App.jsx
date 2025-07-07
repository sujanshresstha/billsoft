import { Routes, Route, useLocation } from "react-router-dom";
import MenuBar from "./components/Menubar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import ManageItems from "./pages/manageItems/ManageItems";
import Explore from "./pages/Explore/Explore";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";


function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && <MenuBar />}
      <Toaster />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
