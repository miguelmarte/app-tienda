import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Inicio = () => {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faHome} />
        Inicio
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi odit
        similique eius voluptas cumque! Tempora quas quis at, culpa tenetur est
        fuga ipsum odio dolorem consequatur ratione a molestiae qui!
      </p>
    </div>
  );
};

export default Inicio;
