import './App.css';
import ListaLibros from './components/ListaLibros';
import { Libros } from './data/Libros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcercaDe from './components/AcercaDe';
import PaginaNoEncontrada from './components/PaginoNoEncontrada';
import Menu from './components/Menu';
import DetalleLibro from './components/DetalleLibro';

function App() {

  return (
    <>
    
    <div className="container"/>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<ListaLibros Libros={Libros} />} />
          <Route path="/Libros/:id" element={<DetalleLibro Libros={Libros} />}/>;
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="*" elemente={<PaginaNoEncontrada />} />
        </Routes>
      </BrowserRouter>
      <div/>
    </>
  );
}

export default App;
