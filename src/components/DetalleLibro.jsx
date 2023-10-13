import { useParams } from "react-router-dom";


const DetalleLibro = ({Libros}) => {
    const {id} = useParams ();
    const Libro = Libros.find ( l => l.id === parseInt(id));
    return (
        <div>
            <h2>{Libro.título}</h2>
            <p>{Libro.descripción}</p>
            <p>{Libro.autor}</p>
            <p>{Libro.categoría}</p>
        </div>
    );
};
export default DetalleLibro;