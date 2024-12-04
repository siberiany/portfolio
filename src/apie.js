import React from "react";
import As from "./images/as.png"; // Import the image

function Apie() {
  return (
    <>
          <h2 class="api">Apie mane</h2>
      <div className="apie">
        <p>
          Aš esu grafikos dizainerė ir iliustratorė. Mano veikla apima reklamos,
          brandingo dizainas. Aš taip pat užsiimu vizualizacijų animavimų ir
          skaitmeniniu piešimu.<br/><br/>
          Aš esu kilusi iš Lietuvos tačiau gyvenau ne vienoje šalyje. Taip aš
          įgijau daug patirties bendraudama su įvairių kultūrų žmonėmis. Man
          labai svarbu suprasti kliento poreikius ir išpildyti jo vizija bei
          papildyti ją savo vaizduotės sugebėjimais. Mokymasis įvairiose dailės
          bureliuose bei Vienožinskio dailės mokyklos baigimas padėjo man
          patobulinti gėbėjimus dizaino srityje. Be to, savanoriaudama mokyklos
          savivaldoje turėjau progą išmokti kurti reklamines vizualizacijas.
        </p>
        <img
          src={As}
          width="300px"
          height="auto"
          alt="As"
        />
      </div>
    </>
  );
}

export default Apie;

