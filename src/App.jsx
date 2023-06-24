import React, { useEffect } from 'react';
import MenuBar from './components/MenuBar';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Devices from './pages/devices/Devices';
import Users from './pages/users/Users';

export default function App() {

  useEffect(()=>{
    //document.getElementById("htmldoc").setAttribute("dir","rtl")
  })

  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/devices" element={<Devices />} />
      </Routes>
    </>
  );
}
