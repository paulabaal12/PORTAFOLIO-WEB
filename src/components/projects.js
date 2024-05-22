import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3, 
        },
      },
    ],
  };

  
  const proyectos = [
    { nombre: 'Dibujo solo con CSS ', descripcion: 'Dibujo inspirado en la cantante Taylor Swift', imagen: '/csslab.png', github: 'https://github.com/paulabaal12/lab4-22764' },
    { nombre: 'Chat Cliente', descripcion: 'Chat elaborado con JS, conectado a API', imagen: '/chatlab.png', github: 'https://github.com/paulabaal12/lab5-JSONLY' },
    { nombre: 'Blog F1 Admin', descripcion: 'Blog creado con Vite + React con funciones de Admin', imagen: '/blog.png', github: 'https://github.com/paulabaal12/PROY-WEB1' },
    { nombre: 'Compra y venta', descripcion: 'Proyecto sobre compra y venta en línea', imagen: '/compra.png', github: 'https://github.com/paulabaal12/PROY-SOFTWARE' },
    { nombre: 'Calculadora', descripcion: 'Calculadora con operaciones sencillas', imagen: '/calculadora.png', github: 'https://github.com/paulabaal12/lab8-Calculadora' },
  ];

  return (
    <section id="projects"className={styles.container}>
      <h1>Proyectos</h1>
      <Slider {...settings}>
        {proyectos.map((proyecto, i) => (
          <div key={i} className={styles.projectCard}>
            <img src={proyecto.imagen} alt={proyecto.nombre} />
            <h2>{proyecto.nombre}</h2>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
              <button>Ver en GitHub</button>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
}
