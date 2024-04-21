import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Chefs from "./pages/Chefs";
import Contact from "./pages/Contact";

import LoginAdmin from "./components/admin/LoginAdmin";
import LayoutAdmin from "./components/admin/LayoutAdmin";
import ManageContacts from "./components/admin/ManageContacts";
import UpdateContacts from "./components/admin/UpdateContacts";
import DeleteContacts from "./components/admin/DeleteContacts";
import AddFood from "./components/admin/AddFood";
import ManageFood from "./components/admin/ManageFood";
import UpdateFood from "./components/admin/UpdateFood";
import DeleteFood from "./components/admin/DeleteFood";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="chefs" element={<Chefs />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-admin/layout-admin" element={<LayoutAdmin />} />
        <Route
          path="/login-admin/manage-contacts"
          element={<ManageContacts />}
        />
        <Route
          path="/login-admin/update-contacts/:id"
          element={<UpdateContacts />}
        />
        <Route
          path="/login-admin/delete-contacts/:id"
          element={<DeleteContacts />}
        />
        <Route path="/login-admin/add-food" element={<AddFood />} />
        <Route path="/login-admin/manage-food" element={<ManageFood />} />
        <Route path="/login-admin/update-food/:id" element={<UpdateFood />} />
        <Route path="/login-admin/delete-food/:id" element={<DeleteFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
