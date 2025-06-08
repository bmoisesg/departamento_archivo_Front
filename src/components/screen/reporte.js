import React, { useEffect, useState } from "react";

function Reporte() {
    const [historial, setHistorial] = useState([]);
    const [historial2, setHistorial2] = useState([]);

    useEffect(() => {
        obtenerReporte1(); 
        obtenerReporte2(); 
    }, []);

    const obtenerReporte1 = () => {
        fetch("http://localhost:8080/reporte/1", {
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
                setHistorial(resultado);
            })
            .catch((error) => {
                console.error("Error al enviar:", error);
            });
    };

    const obtenerReporte2 = () => {
        fetch("http://localhost:8080/reporte/2", {
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
                setHistorial2(resultado);
            })
            .catch((error) => {
                console.error("Error al enviar:", error);
            });
    };


    return (
        <div style={{ padding: "20px" }}>
            <h2>Reporte 1</h2>
            <p>Reporte de movimientos que ha tenido cada archivo</p>
            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
                style={{ width: "100%", borderCollapse: "collapse" }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del archivo</th>
                        <th>Contador movientos</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map((historial) => (
                        <tr key={historial.id}>
                            <td>{historial.id_archivo}</td>
                            <td>{historial.titulo}</td>
                            <td>{historial.contador}</td>

                        </tr>
                    ))}                </tbody>
            </table>


            <h2>Reporte 2</h2>
            <p>Reporte de cuantos archivos hay segun el estado</p>
            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
                style={{ width: "100%", borderCollapse: "collapse" }}
            >
                <thead>
                    <tr>
                        <th>Nombre del estado</th>
                        <th>Contador de Archivos</th>
                    </tr>
                </thead>
                <tbody>
                    {historial2.map((historial) => (
                        <tr key={historial.id}>
                            <td>{historial.titulo}</td>
                            <td>{historial.cantidad}</td>

                        </tr>
                    ))}                </tbody>
            </table>
        </div>
    );
}
export default Reporte; 