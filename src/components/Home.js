import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Escolha seu Pedido</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
        {/* Card de Yakissoba */}
        <Link to="/yakissoba">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Yakissoba" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Yakissoba</h2>
              <p className="text-gray-600 mt-2">Deliciosos yakissobas com diferentes opções!</p>
            </div>
          </div>
        </Link>

        {/* Card de Marmitas Fitness */}
        <Link to="/marmitas-fitness">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Marmitas Fitness" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Marmitas Fitness</h2>
              <p className="text-gray-600 mt-2">Opções saudáveis e saborosas para seu dia a dia.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
