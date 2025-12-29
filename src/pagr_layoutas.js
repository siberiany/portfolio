import React from "react";
import { Outlet } from "react-router-dom";

import "./stiliai.css";

import Headeris from "./komponentu_biblioteka/headeris";
import Meniu from "./komponentu_biblioteka/meniu";
import Footeris from "./komponentu_biblioteka/footeris";


function Layoutas() {
  let kontaktu_masyvas = [""];

  let meniu_komandos = [
    { adresas: "/", pavadinimas: "Main." },
    { adresas: "/darbai", pavadinimas: "Portfolio." },
    { adresas: "/apie", pavadinimas: "About me." },
  ];

  return (
    <>
      <Headeris
        stilius={{ padding: "20px" }}
        logo="logo.png"
        logo_plotis="65px"
      />

      <Meniu
        komandos={meniu_komandos}
        klase="meniu"
          stilius={{ }}
      />
      <div className="turinys">
        <Outlet />
      </div>

      <Footeris
        pavadinimas=""
        elementai={kontaktu_masyvas}
        stilius={{ color: "white", padding: "20px" }}
      />
    </>
  );
}

export default Layoutas;

