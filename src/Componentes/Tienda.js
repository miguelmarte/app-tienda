import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Productos from "./Productos";
const Tienda = ({ productos, agregarProductoAlCarrito }) => {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faShoppingBag} />
        Tienda
      </h1>
      <Productos
        productos={productos}
        agregarProductoAlCarrito={agregarProductoAlCarrito}
      />
    </div>
  );
};

export default Tienda;
