import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function IngresarArchivoScreen() {
    const navigate = useNavigate();
    const [tipos, setTipos] = useState([]);
    const [valor, setValor] = useState('');



    useEffect(() => {
        fetch(`http://localhost:8080/tipo`, {
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
                setTipos(resultado);
            })
            .catch((error) => {
                console.error("Error al enviar:", error);
            });
    }, []);

    const manejarCambio = (event) => {
        setValor(event.target.value);

    };


    const manejarClick = () => {
        const ctltitulo = document.getElementById('miTitulo');
        const ctlfiscal = document.getElementById('miFiscal');
        const titulo = ctltitulo.value;
        const idTipo = valor;
        const fiscal = ctlfiscal.value;
        const data = {
            titulo: titulo,
            id_tipo: idTipo,
            fiscal_ingresa: fiscal
        };
        if (titulo === ''||idTipo==='') { 
            console.log('llenar datos obligatorios'); 
            return; 
        }

        fetch('http://localhost:8080/archivo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(() => {
                alert('Archivo ingresado con exito');
                navigate(-1);
            })
            .catch(error => {
                console.error('Error al enviar:', error);
            });
    };

    return (
        <div className='divespecial'>
            <h1>Ingresar archivo</h1>

            <h3>Título *</h3>
            <input id='miTitulo' />

            <h3>Tipo de archivo *</h3>
            <select id='miIdTipo' onChange={manejarCambio} >
                <option value="">Seleccione una opción</option>
                {tipos.map((tipo) => (
                    <option key={tipo.id_tipo} value={tipo.id_tipo}>
                        {tipo.titulo}
                    </option>
                ))}
            </select>

            <h3>Fiscal que ingresa (dpi)</h3>
            <input id='miFiscal' />

            <br /><br />
            <button className="boton-estandar" onClick={manejarClick}>Ingresar</button>
        </div>
    );
}

export default IngresarArchivoScreen;
