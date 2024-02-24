import React, { useState, useEffect } from 'react';
import data from "../../config/data.json";

const QuemSomos = () => {
  // Definindo estados para os números de projetos, clientes e prêmios
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [awards, setAwards] = useState(0);

  // Função para verificar se a seção "Quem somos?" está visível ao rolar a página
  const handleScroll = () => {
    const quemSomosSection = document.getElementById('quem-somos');
    if (quemSomosSection) {
      const { top, bottom } = quemSomosSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Se a seção estiver visível, iniciar a animação dos números
      if (top < windowHeight && bottom > 0) {
        animateNumbers(200, 20, 10); // Chama a função animateNumbers com os valores finais desejados
        window.removeEventListener('scroll', handleScroll); // Remove o listener de scroll para evitar chamadas repetidas
      }
    }
  };

  // Efeito que adiciona o listener de scroll ao montar o componente e remove ao desmontar
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para animar os números até seus valores finais
  const animateNumbers = (finalProjects, finalClients, finalAwards) => {
    const totalIncrements = 100;
    const incrementProjects = finalProjects / totalIncrements;
    const incrementClients = finalClients / totalIncrements;
    const incrementAwards = finalAwards / totalIncrements;

    let currentProjects = 0;
    let currentClients = 0;
    let currentAwards = 0;

    const interval = setInterval(() => {
      // Incrementa os valores atuais até atingirem os valores finais
      if (currentProjects < finalProjects) {
        currentProjects += incrementProjects;
        setProjects(Math.min(Math.ceil(currentProjects), finalProjects));
      }
      if (currentClients < finalClients) {
        currentClients += incrementClients;
        setClients(Math.min(Math.ceil(currentClients), finalClients));
      }
      if (currentAwards < finalAwards) {
        currentAwards += incrementAwards;
        setAwards(Math.min(Math.ceil(currentAwards), finalAwards));
      }

      // Para o intervalo quando todos os valores atingirem seus valores finais
      if (currentProjects >= finalProjects && currentClients >= finalClients && currentAwards >= finalAwards) {
        clearInterval(interval);
      }
    }, 10);
  };

  return (
    // Componente de seção "Quem somos?"
    <section id="quem-somos" className="mt-52">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 px-5 lg:grid-cols-2 lg:px-0 lg:gap-52">
          <div className="flex flex-col gap-10">
            <h1 className="text-black text-5xl font-semibold uppercase">Quem somos?</h1>
            <p className="text-blackBirdz tracking-normal">{data.textAbout}</p>
            <div className="flex gap-20">
              <div className="flex-col">
                <span className="text-yellowBirdz font-semibold text-4xl">+{projects}</span>
                <p className="text-black text-lg font-semibold uppercase">Projetos</p>
              </div>
              <div className="flex-col gap-5">
                <span className="text-yellowBirdz font-semibold text-4xl">+{clients}</span>
                <p className="text-black text-lg font-semibold uppercase">Clientes</p>
              </div>
              <div className="flex-col gap-5">
                <span className="text-yellowBirdz font-semibold text-4xl">+{awards}</span>
                <p className="text-black text-lg font-semibold uppercase">Prêmios</p>
              </div>
            </div>
          </div>
          <img src="./images/objeto-quem-somos.png" className="hover:scale-105 transition-transform duration-300 ease-in-out" alt="" />
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
