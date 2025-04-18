
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection = () => {
  const features = [
    'Soluciones innovadoras y tecnológicas',
    'Marcas internacionales cuidadosamente seleccionadas',
    'Amplio portafolio de productos de primer nivel',
    'Asesoramiento técnico personalizado',
    'Productos adaptados a las necesidades del cliente',
    'Compromiso con el Agronegocio paraguayo',
  ];

  return (
    <section className="container-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden relative w-3/4 mx-auto">
            <AspectRatio ratio={4/3} className="bg-muted">
              <img 
                src="https://www.cmpproductos.com.py//wp-content//uploads//2024//06//WhatsApp-Image-2024-06-06-at-14.32.04-1.jpeg" 
                alt="Equipo de CMP AGRO"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cmp-green/80 to-transparent p-6">
                <span className="text-white font-medium text-lg">Compromiso con el campo</span>
              </div>
            </AspectRatio>
          </div>
        </div>
        
        <div>
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="text-gray-600 mb-6">
            Somos una empresa líder que tiene como objetivo dar soluciones innovadoras y 
            tecnológicas al Agronegocio del Paraguay. 🇵🇾
          </p>
          <p className="text-gray-600 mb-6">
            Seleccionamos cuidadosamente las marcas internacionales que representamos. 
            Esto con el objetivo de ofrecer un amplio portafolio de productos de primer nivel.
          </p>
          <p className="text-gray-600 mb-6">
            Nuestros técnicos están siempre disponibles para brindar asesoramiento 
            personalizado y garantizar a los clientes, productos y soluciones de 
            acuerdo a sus necesidades.
          </p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cmp-green-light/20 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-cmp-green" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link to="/nosotros" className="btn-primary">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
