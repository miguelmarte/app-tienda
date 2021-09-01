import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import Inicio from "./Componentes/Inicio";
import Blog from "./Componentes/Blog";
import Tienda from "./Componentes/Tienda";
import Error404 from "./Componentes/Error404";
import Carrito from "./Componentes/Carrito";
import asus from "./img/asus.jpg";
import play5 from "./img/play5.jpg";
import s20 from "./img/samsungs20.jpg";
import sony from "./img/sony.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBlog,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  const productos = [
    { id: 1, nombre: "PlayStation 5", img: { play5 } },
    { id: 2, nombre: "Samsung Galaxy S20", img: { s20 } },
    { id: 3, nombre: "ASUS VivoBook 15 Laptop", img: { asus } },
    { id: 4, nombre: "SONY WH-1000XM3", img: { sony } },
  ];
  const [carrito, cambiarCarrito] = useState([]);
  const agregarProductoAlCarrito = (idProductoAAgregar, nombre, img) => {
    if (carrito.length === 0) {
      cambiarCarrito([
        { id: idProductoAAgregar, nombre: nombre, cantidad: 1, img: img },
      ]);
    } else {
      const nuevoCarrito = [...carrito];
      const yaEstaEnElCarrito =
        nuevoCarrito.filter((productoDeCarrito) => {
          return productoDeCarrito.id === idProductoAAgregar;
        }).length > 0;

      if (yaEstaEnElCarrito) {
        nuevoCarrito.forEach((productoDeCarrito, index) => {
          if (productoDeCarrito.id === idProductoAAgregar) {
            const cantidad = nuevoCarrito[index].cantidad;
            const img = nuevoCarrito[index].img;
            nuevoCarrito[index] = {
              id: idProductoAAgregar,
              nombre: nombre,
              cantidad: cantidad + 1,
              img: img,
            };
          }
        });
      } else {
        nuevoCarrito.push({
          id: idProductoAAgregar,
          nombre: nombre,
          cantidad: 1,
          img: img,
        });
      }
      cambiarCarrito(nuevoCarrito);
    }
  };
  return (
    <Contenedor>
      <Menu>
        <NavLink to="/" exact={true}>
          <FontAwesomeIcon icon={faHome} />
          Inicio
        </NavLink>
        <NavLink to="/blog">
          <FontAwesomeIcon icon={faBlog} />
          Blog
        </NavLink>
        <NavLink to="/tienda">
          <FontAwesomeIcon icon={faShoppingBag} />
          Tienda
        </NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/" component={Inicio} exact={true} />
          <Route path="/blog" component={Blog} />
          <Route path="/tienda">
            <Tienda
              productos={productos}
              agregarProductoAlCarrito={agregarProductoAlCarrito}
            />
          </Route>
          <Route component={Error404} />
        </Switch>
      </main>
      <aside>
        <Carrito carrito={carrito} cambiarCarrito={cambiarCarrito} />
      </aside>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
  h3 {
    text-align: center;
  }
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
  a.active {
    background: #1d85e8;
    font-weight: bold;
  }
`;

export default App;
