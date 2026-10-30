import React from 'react';
import imgCaballo from './assets/images/caballo.jpg';
import img7Picos from './assets/images/7picos.jpg';
import imgBamby from './assets/images/bamby.jpg';
import imgCumpleanos from './assets/images/pinata-cumpleanos.jpeg';
import imgTomas from './assets/images/tomas.jpg';

const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || '523525232152';
const WHATSAPP_MESSAGE =
  'Hola, me gustaría solicitar una cotización para una piñata personalizada.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const GALLERY_ITEMS = [
  {
    id: 'obra-01',
    title: 'Caballo de Carrusel en Relieve',
    category: 'Primera Infancia',
    dimensions: '95 x 70 cm',
    aspectClass: 'aspect-[3/4]',
    gridClass: 'md:col-span-7',
    imageSrc: imgCaballo,
    imageAlt:
      'Piñata artesanal de caballo en tonos suaves con detalles en papel crepé',
    width: 736,
    height: 981,
  },
  {
    id: 'obra-02',
    title: 'Estrella Tradicional de Siete Picos',
    category: 'Edición Clásica',
    dimensions: '110 x 110 cm',
    aspectClass: 'aspect-[3/4]',
    gridClass: 'md:col-span-5 md:mt-16',
    imageSrc: img7Picos,
    imageAlt:
      'Piñata tradicional de siete picos elaborada con cartonería y papel picado',
    width: 736,
    height: 982,
  },
  {
    id: 'obra-03',
    title: 'Cervatillo Infantil Esculpido',
    category: 'Modelado Temático a Medida',
    dimensions: '85 x 60 cm',
    aspectClass: 'aspect-[3/4]',
    gridClass: 'md:col-span-5',
    imageSrc: imgBamby,
    imageAlt:
      'Piñata personalizada de cervatillo con acabado en capas de papel fino',
    width: 480,
    height: 640,
  },
  {
    id: 'obra-04',
    title: 'Locomotora Infantil con Relieves',
    category: 'Cumpleaños Temático',
    dimensions: '90 x 50 cm',
    aspectClass: 'aspect-[3/4]',
    gridClass: 'md:col-span-7 md:-mt-12',
    imageSrc: imgTomas,
    imageAlt:
      'Piñata artesanal de locomotora infantil modelada en cartón tradicional',
    width: 415,
    height: 739,
  },
  {
    id: 'obra-05',
    title: 'Diseño Especial para Fiesta de Cumpleaños',
    category: 'Festejos Infantiles',
    dimensions: '100 x 75 cm',
    aspectClass: 'aspect-[4/3] md:aspect-[21/9]',
    gridClass: 'md:col-span-12',
    imageSrc: imgCumpleanos,
    imageAlt:
      'Piñata festiva de cumpleaños personalizada para evento infantil',
    width: 1600,
    height: 1200,
  },
];

const DIFFERENTIATORS = [
  {
    number: '01',
    title: 'Personalización Absoluta',
    description:
      'Cada pieza parte de un boceto inédito diseñado según la temática, paleta cromática y escala de su celebración. No trabajamos con moldes industriales ni catálogos cerrados.',
  },
  {
    number: '02',
    title: 'Oficio Manual en Cartonería',
    description:
      'Modelamos, empapelamos y vestimos cada figura de forma íntegramente artesanal. El corte de flecos y el plisado en capas se realizan a mano para lograr volumen y carácter escultórico.',
  },
  {
    number: '03',
    title: 'Materiales Nobles y Seguros',
    description:
      'Utilizamos estructura de cartón libre de grapas metálicas, engrudo tradicional de trigo y papeles crepé y china de alto gramaje, garantizando resistencia durante el juego y seguridad para los niños.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-[#1E1D1A] antialiased selection:bg-[#B84A39] selection:text-[#FAF7F2]">
      {/* Navegación Minimalista */}
      <header className="border-b border-[#E2D9C8] bg-[#FAF7F2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-12">
          <a
            href="#inicio"
            className="font-serif text-xl tracking-[0.18em] uppercase text-[#1E1D1A] transition-opacity duration-200 hover:opacity-75 md:text-2xl"
          >
            Lupita <span className="font-normal text-[#6E675F]">Piñatería</span>
          </a>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center space-x-10 text-xs uppercase tracking-[0.15em] text-[#5C5852]">
              <li>
                <a
                  href="#galeria"
                  className="transition-colors duration-200 hover:text-[#1E1D1A]"
                >
                  Archivo Visual
                </a>
              </li>
              <li>
                <a
                  href="#oficio"
                  className="transition-colors duration-200 hover:text-[#1E1D1A]"
                >
                  Nuestro Oficio
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[#B84A39] pb-0.5 text-[#B84A39] transition-colors duration-200 hover:border-[#1E1D1A] hover:text-[#1E1D1A]"
                >
                  Contacto Directo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* Hero Section Editorial */}
        <section className="border-b border-[#E2D9C8] px-6 py-20 md:px-12 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#B84A39]">
                  Diseño infantil sobrepedido
                </p>
                <h1 className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#1E1D1A] sm:text-5xl md:text-6xl">
                  Diseño de piñatas personalizadas para hacer inolvidables sus
                  celebraciones.
                </h1>
              </div>

              <div className="flex flex-col justify-between border-t border-[#E2D9C8] pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="mb-8 text-base leading-relaxed text-[#5C5852]">
                  Creamos piezas únicas a mano para fiestas infantiles y eventos
                  familiares, combinando la tradición del papel trabajado en
                  capas con una dirección de arte cuidada al detalle.
                </p>
                <div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-[#B84A39] px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#FAF7F2] transition-colors duration-300 hover:bg-[#96392A] focus:outline-none focus:ring-2 focus:ring-[#B84A39] focus:ring-offset-2 focus:ring-offset-[#FAF7F2] sm:w-auto"
                  >
                    Cotizar por WhatsApp
                  </a>
                  <p className="mt-3 text-xs text-[#6E675F]">
                    Tiempo de elaboración recomendado: 2 a 3 semanas de
                    anticipación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería Asimétrica con Lazy Loading */}
        <section
          id="galeria"
          aria-labelledby="titulo-galeria"
          className="border-b border-[#E2D9C8] px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 flex flex-col justify-between border-b border-[#E2D9C8] pb-6 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#6E675F]">
                  Selección de Piezas
                </p>
                <h2
                  id="titulo-galeria"
                  className="font-serif text-3xl font-normal text-[#1E1D1A] md:text-4xl"
                >
                  Archivo de Trabajo Reciente
                </h2>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5C5852] md:mt-0 md:text-right">
                Cada proyecto es documentado en nuestro taller antes de su
                entrega. Fotografías de referencia proporcional.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-12 md:gap-x-10 md:gap-y-20">
              {GALLERY_ITEMS.map((item, index) => (
                <figure
                  key={item.id}
                  className={`group flex flex-col ${item.gridClass}`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-[#EFE9DD] border border-[#E2D9C8] ${item.aspectClass}`}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  <figcaption className="mt-4 flex items-baseline justify-between border-t border-[#E2D9C8] pt-3 text-xs">
                    <div>
                      <span className="mr-3 font-mono text-[#B84A39]">
                        0{index + 1}
                      </span>
                      <span className="font-medium text-[#1E1D1A]">
                        {item.title}
                      </span>
                    </div>
                    <div className="text-right text-[#6E675F]">
                      <span>{item.category}</span>
                      <span className="mx-2">—</span>
                      <span>{item.dimensions}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciadores: Tres Apartados Concisos */}
        <section
          id="oficio"
          aria-labelledby="titulo-diferenciadores"
          className="border-b border-[#E2D9C8] bg-[#F4EFE6] px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-2xl">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#B84A39]">
                Principios del Taller
              </p>
              <h2
                id="titulo-diferenciadores"
                className="font-serif text-3xl font-normal text-[#1E1D1A] md:text-4xl"
              >
                Rigor artesanal en cada etapa de construcción
              </h2>
            </div>

            <div className="grid grid-cols-1 border-t border-[#DCD2C0] md:grid-cols-3">
              {DIFFERENTIATORS.map((item, idx) => (
                <article
                  key={item.number}
                  className={`py-10 md:py-12 ${idx !== 0
                    ? 'border-t border-[#DCD2C0] md:border-l md:border-t-0 md:pl-10'
                    : ''
                    } ${idx !== 2 ? 'md:pr-10' : ''}`}
                >
                  <span className="block font-serif text-sm tracking-[0.15em] text-[#B84A39]">
                    {item.number}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-normal text-[#1E1D1A]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5C5852]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer con CTA Secundario y Derechos Reservados */}
      <footer className="bg-[#1E1D1A] px-6 py-20 text-[#FAF7F2] md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between border-b border-[#33312C] pb-16 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#C8BFA8]">
                Pedidos y Consultas
              </p>
              <h2 className="font-serif text-3xl font-normal leading-snug text-[#FAF7F2] md:text-4xl">
                Platíquenos la idea de su próximo festejo y diseñemos juntos la
                pieza central.
              </h2>
            </div>

            <div className="mt-8 md:mt-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#FAF7F2] bg-transparent px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#FAF7F2] transition-colors duration-300 hover:bg-[#FAF7F2] hover:text-[#1E1D1A]"
              >
                Iniciar Conversación en WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 text-xs text-[#9E978B] sm:flex-row sm:items-center">
            <p className="font-serif tracking-[0.15em] uppercase text-[#FAF7F2]">
              Lupita Piñatería
            </p>
            <p>
              &copy; {new Date().getFullYear()} Lupita Piñatería. Todos los
              derechos reservados. Hecho por Celtics TI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

