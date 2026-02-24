// Ao rolar a página,navbar fica transparente
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar-scrolled');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Mensagem personaliazada no WhatsApp
document.addEventListener("DOMContentLoaded", function () {
    const numero = '5521984063033';
    const mensagem = 'Olá, vi seu site e quero negociar minhas skins!';
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    const botao = document.getElementById("whatsapp-link");
    botao.href = link;
  });


// Script para o slider de imagens (feito no gemini pro)

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let currentIndex = Math.floor(slides.length / 2);
  let hoverTimeout; // Variável para controlar nosso timer do delay

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'left-1', 'left-2', 'left-3', 'right-1', 'right-2', 'right-3');

      const offset = index - currentIndex;

      if (offset === 0) {
        slide.classList.add('active');
      } else if (offset === 1) {
        slide.classList.add('right-1');
      } else if (offset === 2) {
        slide.classList.add('right-2');
      } else if (offset === 3) {
        slide.classList.add('right-3');
      } else if (offset === -1) {
        slide.classList.add('left-1');
      } else if (offset === -2) {
        slide.classList.add('left-2');
      } else if (offset === -3) {
        slide.classList.add('left-3');
      }
    });
  }


  slides.forEach((slide, index) => {
    slide.addEventListener('mouseenter', () => {
      
      clearTimeout(hoverTimeout);

     
      hoverTimeout = setTimeout(() => {
        currentIndex = index;
        updateSlider();
      }, 200); 
    });
  });

  // Adicionado para estabilidade: cancela o timer se o mouse sair da área do slider
  slider.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
  });

  // Os listeners dos botões continuam funcionando normalmente
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  // Inicia o slider na posição correta
  updateSlider();
});


// Função para alternar entre idiomas

function alternarIdioma(toggle) {
  const select = document.querySelector(".goog-te-combo");

  if (select) {
    select.value = toggle.checked ? "en" : "pt";
    select.dispatchEvent(new Event("change"));
  }
}

function traduzirParaIngles() {
  const select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = "en";
    select.dispatchEvent(new Event("change"));
  }
}

function carregarTradutor() {
  new google.translate.TranslateElement({
    pageLanguage: 'pt',
    autoDisplay: false
  }, 'google_translate_element');
}

//  Popup Loja 
(function () {
  const POPUP_ID = "shopPopup";
  const CLOSE_ID = "shopPopupClose";
  const SHOW_AFTER_MS = 2000; // tempo pra aparecer 

  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById(POPUP_ID);
    const closeBtn = document.getElementById(CLOSE_ID);

    if (!popup || !closeBtn) return;

    // Mostra sempre que carregar a página
    setTimeout(() => {
      popup.hidden = false;
      requestAnimationFrame(() => {
        popup.classList.add("is-visible");
      });
    }, SHOW_AFTER_MS);

    // Botão fechar
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("is-visible");
      setTimeout(() => {
        popup.hidden = true;
      }, 250);
    });
  });
})();


//  Exit Popup 
(function () {
  const popup = document.getElementById("exitPopup");
  const closeBtn = document.getElementById("exitPopupClose");

  if (!popup || !closeBtn) return;

  let shown = false; // evita abrir várias vezes

  document.addEventListener("mouseleave", function (e) {
    if (shown) return;

    // Detecta saída pelo topo
    if (e.clientY <= 0) {
      shown = true;

      popup.hidden = false;

      requestAnimationFrame(() => {
        popup.classList.add("is-visible");
      });
    }
  });

  // Fechar
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("is-visible");
    setTimeout(() => {
      popup.hidden = true;
    }, 250);
  });
})();