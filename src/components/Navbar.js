import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

function Navbar({ cart, setCart }) {
  // Estado para controlar a visibilidade do carrinho
  const [isCartVisible, setIsCartVisible] = useState(false);
  // Estado para controlar a visibilidade do menu no mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do carrinho
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Função para alternar a visibilidade do menu no mobile
  const toggleMenuVisibility = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para excluir um item do carrinho
  const handleRemoveItem = (itemName) => {
    const updatedCart = cart.filter((item) => item.name !== itemName);
    setCart(updatedCart); // Atualiza o carrinho removendo o item
  };

  // Calcular o total de itens no carrinho
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-blue-600 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-2xl font-semibold">Yakissoba App</h1>

        {/* Menu de navegação principal para desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-200">Início</Link>
          <Link to="/yakissoba" className="hover:text-gray-200">Yakissoba</Link>
          <Link to="/marmitas-fitness" className="hover:text-gray-200">Marmitas Fitness</Link>
        </div>

        {/* Ícone de carrinho */}
        <div className="relative mr-4 flex items-center">
          <FaShoppingCart onClick={toggleCartVisibility} className="text-2xl cursor-pointer hover:text-gray-200" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>

        {/* Ícone de menu (hamburguer) para mobile */}
        <div className="md:hidden flex items-center">
          <FaBars onClick={toggleMenuVisibility} className="text-2xl cursor-pointer hover:text-gray-200" />
        </div>
      </div>

      {/* Menu de navegação para dispositivos móveis */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blue-600 text-white p-4">
          <div className="space-y-4">
            <Link to="/" className="block hover:text-gray-200" onClick={toggleMenuVisibility}>Início</Link>
            <Link to="/yakissoba" className="block hover:text-gray-200" onClick={toggleMenuVisibility}>Yakissoba</Link>
            <Link to="/marmitas-fitness" className="block hover:text-gray-200" onClick={toggleMenuVisibility}>Marmitas Fitness</Link>
          </div>
        </div>
      )}

      {/* Exibir conteúdo do carrinho, apenas se o carrinho estiver visível */}
      {isCartVisible && (
        <div className="fixed top-16 right-4 bg-white shadow-lg p-4 rounded-lg w-80 z-50 text-black">
          <h2 className="text-xl font-semibold mb-4">Itens no Carrinho</h2>
          {totalItems === 0 ? (
            <p className="text-gray-600">Seu carrinho está vazio.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span>{item.name} ({item.quantity})</span>
                  <button
                    onClick={() => handleRemoveItem(item.name)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={toggleCartVisibility}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Fechar Carrinho
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
