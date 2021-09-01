import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Carrito = ({ carrito, cambiarCarrito }) => {
  console.log(carrito);
  return (
    <div>
      <h3>
        <FontAwesomeIcon icon={faShoppingCart} />
        Carrito de Compras
      </h3>
      {carrito.length > 0 ? (
        carrito.map((producto, index) => {
          return (
            <Producto key={index}>
              <img src={Object.values(producto.img)} alt="" />
              <NombreProducto>{producto.nombre}</NombreProducto>
              Cantidad: {producto.cantidad}
            </Producto>
          );
        })
      ) : (
        <p>Aun no has agregado productos al carrito</p>
      )}
    </div>
  );
};
const Producto = styled.div`
  display: "flex";
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
  margin-bottom: 30px;
  img {
    float: left;
    width: 60px;
    margin-right: 5px;
  }
`;
const NombreProducto = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export default Carrito;
