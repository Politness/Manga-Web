import React from "react";
import { Footerbar } from "./components/Footerbar";
import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./routes/MainRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <MainRoutes />
      </div>
      <div className="">
        <Footerbar />
      </div>
    </div>
  );
}
