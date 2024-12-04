import React from "react";

function Footeris(props) {
  return (
    <footer className={props.klase} style={props.stilius}>
      {props.pavadinimas && props.pavadinimas}
      <ul>
        {props.elementai.map((item) => (
          <p>{item}</p>
        ))}
      </ul>
    </footer>
  );
}

export default Footeris;
