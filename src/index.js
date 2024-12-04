import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pradinis from "./pradinis";
import Darbai from "./darbai";
import Apie from "./apie";
import NoPage from "./nopage";

import { useState } from "react";

import Layoutas from "./pagr_layoutas";

function PuslapisSuNavigacija() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoutas />}>
          <Route index element={<Pradinis />} />
          <Route path="darbai" element={<Darbai />} />
              <Route path="apie" element={<Apie />} />
                  <Route path="*" element={<NoPage />} />
                      </Route>
                      </Routes>
                      </BrowserRouter>
                      );
                  }
                  
                  const rootElement = document.getElementById("root");
                  const root = createRoot(rootElement);
                  root.render(<PuslapisSuNavigacija />);


