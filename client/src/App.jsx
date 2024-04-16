
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEvent from "./pages/dashboard/Event/AddEvent";
import AddProject from "./pages/dashboard/project/AddProject";
import AddMember from "./pages/dashboard/member/AddMember";
import AddRegistration from "./pages/dashboard/registration/AddRegistration";
import Admin from "./pages/dashboard/Admin";
import User from "./pages/dashboard/User";
import AddService from "./pages/dashboard/service/AddService";
import Mains from "./pages/Mains";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./components/Blog";
import Error from "./pages/Error";
import Events from "./pages/Events";
import AboutH from "./pages/AboutH";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);
  return (
    <section className="app--container">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Mains />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutH />} />
          <Route path="event" element={<Events />} />
          <Route path="admin" element={<Admin /> } />
          <Route path="user" element={<User /> } />
          <Route path="/addmember" element={<AddMember />} />
          <Route path="/addevent" element={<AddEvent />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/addregister" element={<AddRegistration />} />
          <Route path="/addservice" element={<AddService />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
