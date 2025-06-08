
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Panel from './components/navbar'
import InicioPantalla from './components/screen/principal';
import IngresarArchivoScreen from './components/screen/ingresarArchivo';
import GestionarArchivo from './components/screen/gestionarArchivo';
import InfoArchivo from './components/screen/infoArchivo';
import PrestarArchivo from './components/screen/prestarArchivo';
import RegresarArchivo from './components/screen/regresarArchivo';
import EgresarArchivo from './components/screen/egresarArchivo';

function App() {
  return (
    <div>
    <Panel></Panel>
    <Routes>
        <Route path="/" element={<InicioPantalla/>} />
        <Route path="/IngresarArchivo" element={<IngresarArchivoScreen/>} />
        <Route path="/GestinarArchivo" element={<GestionarArchivo/>} />
        <Route path="/InfoArchivo" element={<InfoArchivo/>} />
        <Route path="/PrestarArchivo" element={<PrestarArchivo/>} />
        <Route path="/RegresarArchivo" element={<RegresarArchivo/>} />
        <Route path="/EgresarArchivo" element={<EgresarArchivo/>} />
      </Routes>
    </div>

  );
}


export default App;
