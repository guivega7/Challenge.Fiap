document.addEventListener('DOMContentLoaded', function() {
  // Botões de filtro de tempo
  const timeButtons = document.querySelectorAll('.time-filters button');

  function updateChart(filter) {
    // Lógica para atualizar o gráfico conforme o filtro
    console.log('Atualizar gráfico para filtro:', filter);
  }

  timeButtons.forEach(button => {
    button.addEventListener('click', function() {
      timeButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      updateChart(this.dataset.filter);
    });
  });

  // Animação dos cards ao entrarem na viewport
  const animateCards = function() {
    const cards = document.querySelectorAll('.metric-card');
    cards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (cardPosition < screenPosition && !card.classList.contains('animated')) {
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
        card.classList.add('animated');
      }
    });
  };

  window.addEventListener('scroll', animateCards);
  animateCards(); // Rodar na carga da página

  // Atualização simulada do valor de produção em tempo real
  let currentValue = 15.2;

  function updateProductionValue() {
    const productionElement = document.querySelector('.production-value .value');
    if (productionElement) {
      const variation = (Math.random() * 0.2 - 0.1).toFixed(2); // variação suave
      currentValue = (parseFloat(currentValue) + parseFloat(variation)).toFixed(1);
      productionElement.textContent = currentValue;
    }
  }

  setInterval(updateProductionValue, 5000);
});
document.addEventListener('DOMContentLoaded', function() {
    // Animação dos cards de estatísticas
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Efeito de hover nos recursos tecnológicos
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.1)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
    });
    
    // Efeito de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});