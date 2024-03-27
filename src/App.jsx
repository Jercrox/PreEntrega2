import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useEffect, useState } from 'react';
import { fakeApiCall } from './utils/fakeApiCall';

function App() {
  const [productos, setProductos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Hacer una llamada a la API falsa para obtener los datos de los productos
    fakeApiCall().then(data => {
      setProductos(data.productos);
    });
  }, []);

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<ItemListContainer productos={productos} />} />
        <Route path='/category/:id' element={<ItemListContainer productos={productos} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;