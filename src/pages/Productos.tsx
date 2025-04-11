import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Productos = () => {
  const categories = [
    {
      id: 'forraje',
      name: 'Forraje: Ensilaje y Transporte',
      description: '--- Ensilaje, Almacenamiento, Confinamiento y Transporte ---',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/main/images/Almacenamiento-Ensilaje-etc/comederos/Comederos-1.jpg',
      featuredProduct: 'Comederos para ganado de alta resistencia'
    },
    {
      id: 'envases',
      name: 'Envases y Contenedores',
      description: 'Amplia variedad de envases y contenedores para el almacenamiento y transporte de sus productos agrícolas.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1bdca0998?ixlib=rb-4.0.3',
      featuredProduct: 'Envases plásticos agrícolas'
    },
    {
      id: 'horticultura',
      name: 'Horticultura',
      description: 'Todo lo que necesita para una horticultura exitosa, desde herramientas hasta sistemas de riego especializados.',
      image: 'https://images.unsplash.com/photo-1566330542764-391c1f1430ad?ixlib=rb-4.0.3',
      featuredProduct: 'Sistemas de riego por goteo'
    },
    {
      id: 'otros',
      name: 'Otros Productos',
      description: 'Una variedad de productos adicionales para complementar sus operaciones agrícolas y ganaderas.',
      image: 'https://images.unsplash.com/photo-1566251037378-5e04e2778cc7?ixlib=rb-4.0.3',
      featuredProduct: 'Alimentos balanceados para animales'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-agro-green-dark py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Categorías de Productos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore nuestra amplia gama de categorías para encontrar los productos que necesita para su negocio agropecuario.
            </p>
          </div>
        </div>
        
        {/* Categories Sections */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-agro-green-dark mb-3">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Producto destacado:</span> {category.featuredProduct}
                  </p>
                  
                  {/* Ver Productos Button */}
                  <Link 
                    to={`/productos/${category.id}`}
                    className="block w-full bg-agro-green hover:bg-agro-green-dark text-white text-center font-medium py-2 px-4 rounded transition-colors duration-300"
                  >
                    Ver Productos
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-agro-green-light/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-agro-green-dark mb-6">
              ¿No encuentra lo que busca?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Contáctenos y nuestro equipo de expertos le ayudará a encontrar exactamente lo que necesita.
            </p>
            <Link 
              to="/contacto" 
              className="inline-block bg-agro-green hover:bg-agro-green-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Contactar con un especialista
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Productos;