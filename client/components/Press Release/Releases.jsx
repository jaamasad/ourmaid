import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Releases = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/releases")
      .then((response) => {
        const data = response.data;
        console.log("Respuesta del servidor: ", response.data);
        setReleases(data.data); // actualiza el estado del componente con el arreglo de objetos
      })
      .catch((error) => {
        console.log("Error al obtener los datos del API: ", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {releases.map((release) => (
          <l key={release.id}>
            <h4 className="mb-4 text-2xl font-semibold text-pink-800 md:text-3xl">PRESS RELEASE {moment(release.date, "YYYY-MM-DD").format("MM/DD/YYYY")}</h4>
            <p className="mb-4 text-xl font-semibold text-pink-800 md:text-2xl ">{release.title}</p>
            <p className="text-lg text-justify md:text-xl" dangerouslySetInnerHTML={{ __html: release.content }} />
            <br />
          </l>
        ))}
      </ul>
            
    </div>
  );
};

export default Releases;