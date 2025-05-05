import React from 'react';
import './styles.css';

const Banner = () => {
  const slides = [
    {
      title: "Desenvolvimento de Sites",
      description: "Criamos soluções web modernas e responsivas",
      link: "https://pixalar.vercel.app/",
      buttonText: "Conheça Nossos Sites"
    },
    {
      title: "Aplicações Web",
      description: "Sistemas e ferramentas personalizadas para seu negócio",
      link: "https://pixalar.vercel.app/#servicos",
      buttonText: "Ver Aplicações"
    },
    {
      title: "Micro Serviços",
      description: "Arquiteturas escaláveis e eficientes",
      link: "https://pixalar.vercel.app/#portfolio",
      buttonText: "Ver Projetos"
    },
    {
      title: "Consultoria em TI",
      description: "Soluções tecnológicas para sua empresa",
      link: "https://pixalar.vercel.app/#contato",
      buttonText: "Fale Conosco"
    }
  ];

  return (
    <div className="banner">
      <div className="banner-content">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <a 
              href={slide.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="banner-button"
            >
              {slide.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner; 