import React from 'react';
import './styles.css';

const Banner = () => {
  const slides = [
    {
      title: "Desenvolvimento de Sites",
      description: "Criamos soluções web modernas\ne responsivas",
      link: "https://pixalar.vercel.app/",
      buttonText: "Conheça Nossos Sites"
    },
    {
      title: "Aplicações Web",
      description: "Sistemas e ferramentas\npersonalizadas para seu negócio",
      link: "https://pixalar.vercel.app/#servicos",
      buttonText: "Ver Aplicações"
    },
    {
      title: "Micro Serviços",
      description: "Arquiteturas escaláveis\ne eficientes",
      link: "https://pixalar.vercel.app/#portfolio",
      buttonText: "Ver Projetos"
    },
    {
      title: "Consultoria em TI",
      description: "Soluções tecnológicas\npara sua empresa",
      link: "https://pixalar.vercel.app/#contato",
      buttonText: "Fale Conosco"
    }
  ];

  return (
    <div className="banner">
      <div className="banner-content">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div className="slide-button">
                <a 
                  href={slide.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="banner-button"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner; 