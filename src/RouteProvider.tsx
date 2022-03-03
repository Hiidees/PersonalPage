import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeProvider from "./Providers/HomeProvider";

export default function RouteProvider() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeProvider />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
