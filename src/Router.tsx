import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeController } from "./Components/Controllers/HomeController";

export default function RouteProvider() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeController />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
