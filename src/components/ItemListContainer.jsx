import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categories from '../utils/MocksAsync.json'
import { fakeApiCall } from "../utils/fakeApiCall";
import './ItemListContainer.css'; // Importamos el archivo de estilos CSS

const ItemListContainer = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fakeApiCall(categories).then(res => { setResponse(res); setLoading(false) })
  }, [])

  if (loading) return <h1>Cargando...</h1>

  const getProductosByCategory = (catId) => {
    if (catId) {
      return response.productos.filter((product) => product.categoria === parseInt(catId))
    }
  }

  const productsPorCategoria = getProductosByCategory(id)

  return (
    <div className="item-list-container">
      <div className="categorias">
        <h1>Categorias</h1>
        <ul>
          {response.categorias.map((cat) => (
            <li key={cat.id}>
              <Link to={`/category/${cat.id}`}>{cat.nombre}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="productos">
        {productsPorCategoria && (
          <ul>
            {productsPorCategoria.map((producto) => (
              <li key={producto.id}>
                <Link to={`/item/${producto.id}`}>
                  <div className="producto">
                    <img src={producto.imagen} alt={producto.nombre} />
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
