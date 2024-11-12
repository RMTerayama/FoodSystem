import React, { useState } from 'react';

function YakissobaOptions({ addToCart }) {
  const options = [
    {
      name: 'Yakissoba Vegetariano',
      ingredients: 'Macarrão, Repolho, Cenoura, Brócolis, Pimentão',
      imageUrl: 'https://via.placeholder.com/400x250?text=Vegetariano',
    },
    {
      name: 'Yakissoba de Frango',
      ingredients: 'Macarrão, Frango, Repolho, Cenoura, Brócolis',
      imageUrl: 'https://via.placeholder.com/400x250?text=Frango',
    },
    {
      name: 'Yakissoba de Carne Bovina',
      ingredients: 'Macarrão, Carne, Repolho, Cenoura, Brócolis',
      imageUrl: 'https://via.placeholder.com/400x250?text=Carne+Bovina',
    },
    {
      name: 'Yakissoba de Carne de Porco',
      ingredients: 'Macarrão, Copa Lombo, Repolho, Cenoura, Brócolis',
      imageUrl: 'https://via.placeholder.com/400x250?text=Carne+de+Porco',
    },
    {
      name: 'Yakissoba Misto',
      ingredients: 'Macarrão, Frango, Carne Bovina, Repolho, Cenoura, Brócolis',
      imageUrl: 'https://via.placeholder.com/400x250?text=Misto',
    },
    {
      name: 'Yakissoba de Salmão',
      ingredients: 'Macarrão, Salmão Grelhado, Repolho, Cenoura, Brócolis',
      imageUrl: 'https://via.placeholder.com/400x250?text=Salmão',
    },
  ];

  // Estado para controlar a quantidade de cada Yakissoba
  const [quantities, setQuantities] = useState(
    options.reduce((acc, option) => {
      acc[option.name] = 1; // Inicializa a quantidade de cada opção como 1
      return acc;
    }, {})
  );

  // Função para incrementar a quantidade de um Yakissoba
  const increment = (item) => {
    setQuantities({
      ...quantities,
      [item]: quantities[item] + 1,
    });
  };

  // Função para decrementar a quantidade de um Yakissoba
  const decrement = (item) => {
    setQuantities({
      ...quantities,
      [item]: Math.max(1, quantities[item] - 1), // Impede que a quantidade seja menor que 1
    });
  };

  // Função para adicionar o Yakissoba ao carrinho
  const handleAddToCart = (item) => {
    const quantity = quantities[item];
    addToCart(item, quantity); // Chama a função para adicionar ao carrinho
  };

  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8 m-[8vw]">
<h1 className="text-4xl font-bold text-gray-800 mb-8">Escolha seu Yakissoba</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={option.imageUrl}
              alt={option.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{option.name}</h2>
              <p className="text-gray-600">{option.ingredients}</p>
              <div className="flex items-center mt-4 space-x-2">
                <button
                  onClick={() => decrement(option.name)}
                  className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b text-center">{quantities[option.name]}</span>
                <button
                  onClick={() => increment(option.name)}
                  className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
                >
                  +
                </button>
                <button
                  onClick={() => handleAddToCart(option.name)}
                  className="ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YakissobaOptions;
