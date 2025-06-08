import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GestionarArchivo() {
    const [archivos, setArchivos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/archivo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }
                return response.json();
            })
            .then((resultado) => {

                setArchivos(resultado);
            })
            .catch((error) => {
                console.error("Error al enviar:", error);
            });
    }, []);

    const manejarPrestar = (id_archivo) => {


        fetch(`http://localhost:8080/estado_archivo/${id_archivo}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }
                return response.json();
            })
            .then((resultado) => {

                if (resultado[0].id_estado === 1) {
                    navigate("/PrestarArchivo", { state: { id_archivo } });
                } else if (resultado[0].id_estado === 2) {
                    alert('Este archivo no sepuede prestar, ya fue prestado anteriormente')
                } else if (resultado[0].id_estado === 3) {
                    alert('Este archivo no sepuede prestar, ya fue egresado')
                }
            })
            .catch((error) => {
                console.error("Error al enviar:", error);
            });
    };

    const manejaRegreso = (id_archivo) => {



        fetch(`http://localhost:8080/estado_archivo/${id_archivo}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }
                return response.json();
            })
            .then((resultado) => {

                if (resultado[0].id_estado === 1) {
                    alert('Este archivo no sepuede regresar, no ha sido prestado')
                } else if (resultado[0].id_estado === 2) {
                    navigate("/RegresarArchivo", { state: { id_archivo } });
                } else if (resultado[0].id_estado === 3) {
                    alert('Este archivo no sepuede regresar, ya fue EGRESADO')
                }
            })
            .catch((error) => {
                console.error("Error al enviar:", error);
            });
    };

    const manejoEgresar = (id_archivo) => {

        fetch(`http://localhost:8080/estado_archivo/${id_archivo}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }
                return response.json();
            })
            .then((resultado) => {

                if (resultado[0].id_estado === 1) {
                    navigate("/EgresarArchivo", { state: { id_archivo } });
                } else if (resultado[0].id_estado === 2) {
                    alert('Este archivo no sepuede egresar, no ha sido entregado, alguien lo presto')
                } else if (resultado[0].id_estado === 3) {
                    alert('Este archivo no sepuede regresar, ya fue EGRESADO antes')
                }
            })
            .catch((error) => {
                console.error("Error al enviar:", error);
            });



    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Lista de Archivos</h2>
            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
                style={{ width: "100%", borderCollapse: "collapse" }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {archivos.map((archivo) => (
                        <tr key={archivo.id}>
                            <td>{archivo.id_archivo}</td>
                            <td>{archivo.titulo}</td>
                            <td>{archivo.tipoArchivo}</td>
                            <td>
                                <button className="boton-prestar" onClick={() => manejarPrestar(archivo.id_archivo)}>
                                  🖐️Prestar
                                </button>
                                <button
                                  className="boton-prestar"  onClick={() => manejaRegreso(archivo.id_archivo)}
                                    style={{ marginLeft: "10px" }}
                                >
                                   📥 Entregar
                                </button>
                                <button
                                    className="boton-eliminar" onClick={() => manejoEgresar(archivo.id_archivo)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    ❌Egresar
                                </button>
                                <button
                                    className="boton-info " onClick={() =>
                                        navigate("/InfoArchivo", { state: { archivo } })
                                    }
                                    style={{ marginLeft: "10px" }}
                                >
                                    📃Info
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GestionarArchivo;
