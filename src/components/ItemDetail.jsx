import ItemCount from "./ItemCount";

export const ItemDetail = ({ item, addToCart }) => { // Recibe addToCart como prop

  const handleAdd = (count) => {
    addToCart({ ...item, cantidad: count }); // Agrega el item al carrito con la cantidad seleccionada
  }

  return (
    <>
      <div className="mx-auto my-auto">
        <img src={item.imagen} alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>Precio: ${item.precio}</p>
        <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} /> {/* Pasa handleAdd como prop al componente ItemCount */}
      </div>
    </>
  );
}

export default ItemDetail;