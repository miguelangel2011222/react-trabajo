import React, { useState } from "react";

import axios from "axios";


const Axios = () =>  {
  const [listadino, setListadino] = useState([]);
  const [dinos, setdinos] = useState("");

  const agregarDinos = () => {
    setListadino([...listadino, dinos])
  }
  const [listaDinos, setListaDinos] = useState([]);
  const url = "https://dinosaur-facts-api.shultzlab.com/dinosaurs";
  axios.get(url).then((response) => setListaDinos(response.data));

  return (
    <>
    <label htmlFor="dinos">Dinos</label>
      <input
        type="text"
        id="person"
        value={dinos}
        onChange={(e) => setdinos(e.target.value)}
      />
      <button onClick={agregarDinos}>Agregar dinosaurios</button>

      <br />
      <br />
      <ul>
      {listadino.map((d) => (

        <li>{d}</li>

          ))}
        {listaDinos.map((dinosaur) => (
          <li key={dinosaur.id}>{dinosaur.Name}</li>
        ))}
      </ul>
    </>
  );
};

export default Axios;
