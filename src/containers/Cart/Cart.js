import React from "react";
import {Link } from "react-router-dom";
import {useCartContext } from "../../context/CartContext";
import {CartForm} from "./CartForm.js"

export const CartContainer = () => {

    const { cart, getItemsCount, calculateTotal, removeItem, clearCart } = useCartContext();

    const removeFromCart = (event) => {
        const productID = event.target.value;
        removeItem(productID);
    };


    const generateRow = ({ product: { llave, nombre, precio }, quantity }) => {
        return (
            <tr key={llave}>
                <td>{nombre}</td>
                <td>{quantity}</td>
                <td>${precio}</td>
                <td>${quantity * precio}</td>
                <td>
                    <button
                        className="btn btn-sm btn-outline-warning waves-effect"
                        value={llave}
                        onClick={removeFromCart}
                    >
                        Eliminar
                    </button>
                    <Link to={`/ItemDetailContainer/${llave}`}>
                        <button
                            role="link"
                            className="btn btn-sm btn-outline-warning waves-effect"
                        >
                            Editar
                        </button>
                    </Link>
                </td>
            </tr>

        );
    };

    return (

        <div className="d-flex justify-content-center">
            {cart.length <= 0 ?
                <div className="bodyCarrito">
                    <div className="carritoVacio">
                        <h2 style={{fontStyle: "italic"}}> El Carrito Vacio</h2>
                        <Link to="/">
                            <button className="btn btn-sm btn-outline-warning waves-effect">Volver a productos</button>
                        </Link>
                    </div>
                </div> :
                <div className="box">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-3">
                        <h5>Tu Carrito</h5>
                        <p className="is-size-4 p-1">
                            {`${getItemsCount()} ${getItemsCount() > 1 ? "Productos" : "Producto"}`}
                        </p>
                    </div>

                    <div className="table-container">
                        <table className="table is-fullwidth has-text-centered is-hoverable is-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody> {cart.map((item) => generateRow(item))}</tbody>

                            <tfoot>
                                <tr className="has-text-center is-size-5">
                                    <td colSpan="5">Total: ${calculateTotal()}</td>
                                </tr>
                            </tfoot>
                        </table>

                        <button
                            type="button"
                            className="btn btn-sm btn-outline-warning waves-effect"
                            title="Clear cart"
                            onClick={clearCart}
                        >
                            Limpiar Carrito
                        </button>
                    </div>
                    <br/>
                    <h5>Datos del comprador</h5>
                    <br/>
                    <CartForm/>
                </div>    
            }
        </div>
    );
}