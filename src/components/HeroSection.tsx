import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3')",
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-medium text-white mb-2 leading-tight">
            CMP AGRO
          </h1>
          <p className="text-2xl md:text-6xl font-medium text-white mb-6">
            Innovación que cultiva futuro
          </p>
          <p className="text-lg font-serif text-gray-200 mb-8">
            Soluciones especializadas para agricultura y ganadería,<br/> 
            donde la calidad y la sostenibilidad se unen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/productos" 
              className="bg-cmp-red hover:bg-cmp-red/90 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center"
            >
              Descubrir productos
            </Link>
            <Link 
              to="/contacto" 
              className="bg-cmp-blue hover:bg-cmp-blue/90 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center"
            >
              Contacto inmediato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;