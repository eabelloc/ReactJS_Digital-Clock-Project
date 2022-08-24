import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  //Dentro del hook useEffect creamos dentro la funcion predeterminada "setInterval" la cual, dentro de ella creamos una constante "date" que la igualamos a "new Date()". Luego el "setClockState" es la funcion que setea el estado del reloj que es la variable. Dentro de esto, hacemos la funcion "tolocaleTimeString" lo que devuelve es el tiempo y la fecha de donde estamos.

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital_clock">
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
