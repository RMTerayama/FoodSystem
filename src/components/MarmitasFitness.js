import React, { useState } from 'react';

function MarmitasFitness({ addToCart }) {
  const [quantities, setQuantities] = useState({
    frango: 1,
    carne: 1,
    vegana: 1,
    peixe: 1,       // Novo item: Peixe
    vegetariana: 1, // Novo item: Vegetariana
    tofu: 1,        // Novo item: Tofu
  });

  const increment = (item) => {
    setQuantities({
      ...quantities,
      [item]: quantities[item] + 1,
    });
  };

  const decrement = (item) => {
    setQuantities({
      ...quantities,
      [item]: Math.max(1, quantities[item] - 1),
    });
  };

  const handleAddToCart = (item, name) => {
    const quantity = quantities[item];
    addToCart(name, quantity); // Chama a função para adicionar ao carrinho com o nome da marmita
  };

  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8 m-[8vw]">
<h1 className="text-4xl font-bold text-gray-800 mb-8">Cardápio de Marmitas Fitness</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {/* Card 1 - Frango Grelhado */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Marmita de Frango Grelhado"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Marmita de Frango Grelhado</h2>
            <p className="text-gray-600 mt-2">Frango grelhado acompanhado de arroz integral e brócolis no vapor.</p>
            <div className="flex items-center mt-4 space-x-2">
              <button
                onClick={() => decrement('frango')}
                className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b text-center">{quantities.frango}</span>
              <button
                onClick={() => increment('frango')}
                className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
              >
                +
              </button>
              <button
                onClick={() => handleAddToCart('frango', 'Marmita de Frango Grelhado')}
                className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Carne de Sol */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Marmita de Carne de Sol"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Marmita de Carne de Sol</h2>
            <p className="text-gray-600 mt-2">Carne de sol acompanhada de feijão verde e arroz.</p>
            <div className="flex items-center mt-4 space-x-2">
              <button
                onClick={() => decrement('carne')}
                className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b text-center">{quantities.carne}</span>
              <button
                onClick={() => increment('carne')}
                className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
              >
                +
              </button>
              <button
                onClick={() => handleAddToCart('carne', 'Marmita de Carne de Sol')}
                className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 - Marmita Vegana */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Marmita Vegana"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Marmita Vegana</h2>
            <p className="text-gray-600 mt-2">Arroz integral, legumes e tofu grelhado.</p>
            <div className="flex items-center mt-4 space-x-2">
              <button
                onClick={() => decrement('vegana')}
                className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b text-center">{quantities.vegana}</span>
              <button
                onClick={() => increment('vegana')}
                className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
              >
                +
              </button>
              <button
                onClick={() => handleAddToCart('vegana', 'Marmita Vegana')}
                className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 - Marmita de Peixe (Novo Item) */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Marmita de Peixe"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Marmita de Peixe</h2>
            <p className="text-gray-600 mt-2">Filé de peixe grelhado com arroz integral e salada.</p>
            <div className="flex items-center mt-4 space-x-2">
              <button
                onClick={() => decrement('peixe')}
                className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b text-center">{quantities.peixe}</span>
              <button
                onClick={() => increment('peixe')}
                className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
              >
                +
              </button>
              <button
                onClick={() => handleAddToCart('peixe', 'Marmita de Peixe')}
                className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 - Marmita Vegetariana (Novo Item) */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Marmita Vegetariana"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Marmita Vegetariana</h2>
            <p className="text-gray-600 mt-2">Arroz integral com legumes no vapor e molho pesto.</p>
            <div className="flex items-center mt-4 space-x-2">
              <button
                onClick={() => decrement('vegetariana')}
                className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b text-center">{quantities.vegetariana}</span>
              <button
                onClick={() => increment('vegetariana')}
                className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
              >
                +
              </button>
              <button
                onClick={() => handleAddToCart('vegetariana', 'Marmita Vegetariana')}
                className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>

        {/* Card 6 - Marmita de Tofu (Novo Item) */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Marmita de Tofu"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Marmita de Tofu</h2>
            <p className="text-gray-600 mt-2">Tofu grelhado com legumes ao molho teriyaki.</p>
            <div className="flex items-center mt-4 space-x-2">
              <button
                onClick={() => decrement('tofu')}
                className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b text-center">{quantities.tofu}</span>
              <button
                onClick={() => increment('tofu')}
                className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
              >
                +
              </button>
              <button
                onClick={() => handleAddToCart('tofu', 'Marmita de Tofu')}
                className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarmitasFitness;
