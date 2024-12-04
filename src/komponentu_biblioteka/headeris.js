import React from "react";

function Headeris({
  klase = "d-flex align-items-center justify-content-between",
  stilius = {},
  logo = "logo.png",
  logo_plotis = 100,
}) {
  return (
    <header className={`headeris ${klase}`} style={stilius}>
      <img
        src={require("../images/" + logo)}
        width={logo_plotis}
        height={logo_plotis}
        alt="Logo"
      />
    </header>
  );
}

export default Headeris;

