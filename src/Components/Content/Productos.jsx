import { useState } from "react";
import '../../assets/css/producto.css'
import { sku } from "../../javascript/sku";

function Producto(props) {
    const [contenido, setContenido] = useState(false);
    const toggleContenido = () => {
        setContenido(!contenido);
    };
    const [stock, setStock] = useState(8)

    const comprar = () => {
        setStock(stock - 1)
        alert("Gracias por comprar ✔")
    }
    return (
        <>
            <div className="container-fluid">
            <div className="row justify-content-center align-items-center container_productos">
                <button onClick={toggleContenido}  className="btn btn-primary px-2 ">Ver detalles</button>
                <div className={contenido ? "container_productos--detalle my-3" : "ocultar"}>
                    <p>
                        <span>Nombre: </span>
                        {props.nombre}
                    </p>
                    <p>
                        <span>Despcipción: </span>
                        {props.descripcion}
                    </p>
                    <p>
                        <span>Precio: </span>
                        {props.precio}
                    </p>
                    <p>
                        <span>Código: </span>
                        {sku}
                    </p>
                    <p>
                        <span>En Stock: </span>
                        {stock}
                    </p>
                    <div className="row justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <button onClick={comprar} className="btn btn-dark">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Producto;