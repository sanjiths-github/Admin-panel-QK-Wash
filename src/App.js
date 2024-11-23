import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ServiceRequest from "./pages/ServiceRequest";
import DeviceController from "./pages/DeviceController";
import './App.css'

const App = () => {
  return (
    
    <div style={{ backgroundColor: "#89F3FF", height: "500vh", color: "black" }}>
      <Sidebar />
      <div className="content">
      <div style={{ marginLeft: "345px", padding: "20px" }}>
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/service-request" element={<ServiceRequest />} />
          <Route path="/device-controller" element={<DeviceController />} />


        </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
