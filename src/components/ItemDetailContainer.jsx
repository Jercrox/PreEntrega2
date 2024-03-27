import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from '../utils/MocksAsync.json';
import { ItemDetail } from "./ItemDetail"; // Corregimos la importación
import { fakeApiCall } from "../utils/fakeApiCall";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulamos una llamada a la API para obtener el producto específico
    fakeApiCall(products).then(resp => {
      const product = resp.productos.find(p => p.id === parseInt(id));
      setProducto(product);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="item-detail-container"> {/* Agrega la clase item-detail-container */}
      <ItemDetail item={producto} />
    </div>
  );
};

export default ItemDetailContainer;