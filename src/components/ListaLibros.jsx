
import { Link } from "react-router-dom";
import { useState } from "react";
import FormularioAgregarLibro from "./FormularioAgregarLibro";

const ListaLibros = ({Libros}) => {
    const [categoría, setCategoría] = useState("");
    const [listaLibros, setListaLibros] = useState(Libros);
    const agregarLibro = (nuevoLibro) => {
        setListaLibros([...listaLibros, nuevoLibro]);
    };
    const LibrosFiltrados = listaLibros.filter(
        (Libros) => Libros.categoría === categoría || !categoría); 

    return (
        <>
        <h1>Formulario Nuevo Libro</h1>
        <FormularioAgregarLibro agrefarLibro={agregarLibro} />
        <h1>Mini Catálogo de Libros</h1>
        <label className="Cate">Categoría: </label>
        <select onChange={(e) => setCategoría(e.target.value)}>
        <option key="0" value="">Todos</option>
        <option key="1" value="Clásico">Clásico</option>
        <option key="2" value="Distopía">Distopia</option>
        <option key="3" value="Ciencia Ficción">Ciencia Ficción</option>
        <option key="4" value="Historia">Historia</option>
        <option key="5" value="Realismo Mágico">Realismo Mágico</option>
        <option key="6" value="Thriller">Triller</option>
    </select>
        <div className="book-grid">
            {
                LibrosFiltrados.map((Libros) => (
                <div key={Libros.id} className="book-card">
                    <div className="book-tittle">{Libros.título}</div>
                    <div>{Libros.descripción}</div>
                    <div>{Libros.autor}</div>
                    <div>{Libros.categoría}</div>
                    <Link to={`/Libros/${Libros.id}`} state={{ Libros }} className="ver-mas-link">Ver más</Link>

          </div>
                )) 
            }
        </div>
        </>
    )
}
export default ListaLibros;