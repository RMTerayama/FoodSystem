import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import YakissobaOptions from './components/Yakissoba'; // Certifique-se de usar o nome correto
import MarmitasFitness from './components/MarmitasFitness'; // Certifique-se de usar o nome correto

function App() {
  const [cart, setCart] = useState([]);

  // Função para adicionar itens ao carrinho
  const addToCart = (itemName, quantity) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.name === itemName);

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity += quantity; // Incrementa a quantidade se o item já estiver no carrinho
    } else {
      updatedCart.push({ name: itemName, quantity }); // Adiciona um novo item
    }

    setCart(updatedCart); // Atualiza o carrinho
  };

  // Função para excluir item do carrinho
  const removeFromCart = (itemName) => {
    const updatedCart = cart.filter((item) => item.name !== itemName);
    setCart(updatedCart); // Atualiza o carrinho após excluir o item
  };

  return (
    <Router>
      <Navbar cart={cart} setCart={setCart} />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yakissoba" element={<YakissobaOptions addToCart={addToCart} />} />
          <Route path="/marmitas-fitness" element={<MarmitasFitness addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
