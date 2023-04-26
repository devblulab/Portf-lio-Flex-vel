// Seleciona todos os links de navegação
const links = document.querySelectorAll('header nav ul li a');
const videoLinks = document.querySelectorAll('.video-list z');
const videoPlayer = document.getElementById('video-player');

videoLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    
    const source = e.target.getAttribute('data-src');
    videoPlayer.setAttribute('src', source);
    
    videoLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    e.target.classList.add('active');
  });
});


// Percorre os links
links.forEach(link => {
  // Adiciona um evento de clique em cada link
  link.addEventListener('click', e => {
    // Previne o comportamento padrão do link
    e.preventDefault();

    // Seleciona o elemento correspondente à seção
    const target = document.querySelector(e.target.hash);

    // Verifica se o elemento foi encontrado
    if (target) {
      // Calcula a posição do elemento em relação ao topo do documento
      const top = target.getBoundingClientRect().top + window.pageYOffset;

      // Faz a animação de rolagem suave até a posição do elemento
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  });
});





