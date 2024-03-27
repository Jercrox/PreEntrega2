import { useState } from "react";
import { Link } from "react-router-dom"; // Importamos Link desde react-router-dom
import CartWidget from "./CartWidget";
import Unicorn from "../../public/Unicorn.svg";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const categories = ["Golosinas", "Chocolates", "Caramelos"];

  return (
    <nav className="bg-teal-500 py-4">
      <div className="flex mr-20 ml-10 items-center">
        <img src={Unicorn} alt="Unicorn" className="w-10 h-10" />
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center flex-grow">
            <img src="" alt="" />
            <form className="bg-white p-2 w-full rounded-lg">
              <input
                type="text"
                className="w-full"
                placeholder="Buscar productos..."
              />
            </form>
          </div>
          <div className="ml-20 flex items-center justify-end">
            <ul className="flex space-x-4 justify-end items-center">
              <li>
                <button
                  className="text-white text-xl"
                  onClick={toggleCategories}
                >
                  Categorías
                </button>
                {showCategories && (
                  <ul className="absolute bg-white text-xl w-40">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link to={`/category/${index + 1}`} className="hover:underline">{category}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <button className="text-white text-xl">Productos</button>
              </li>
              <li>
                <button className="text-white text-xl">Contacto</button>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
