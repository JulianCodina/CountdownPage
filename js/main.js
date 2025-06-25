document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("header-contrast");
    } else {
      header.classList.remove("header-contrast");
    }
  });
  const verVideoBtnDesktop = document.querySelector(".anuncio .desktop");
  const verVideoBtnMobile = document.querySelector(".anuncio .mobile");
  const verVideoClick = document.querySelector(".anuncio .onclick");
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const closeBtn = document.querySelector(".close");
  const videoContainer = document.querySelector(".video-container");
  const videoSrc = modalVideo.src;

  if (verVideoBtnDesktop) {
    verVideoBtnDesktop.addEventListener("click", function () {
      modal.style.display = "block";
    });
  }
  if (verVideoClick) {
    verVideoClick.addEventListener("click", function () {
      modal.style.display = "block";
    });
  }
  if (verVideoBtnMobile) {
    verVideoBtnMobile.addEventListener("click", function () {
      window.scrollBy({ top: 330, left: 0, behavior: "smooth" });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      modalVideo.src = videoSrc;
    });
  }
  // Cerrar el modal cuando se hace clic fuera de él
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalVideo.src = videoSrc;
    }
  });


  const countdown = document.querySelector('.countdown');
  const countdownH1 = document.querySelector('.countdown h1');
  if (countdown) {
    const fecha = new Date(2025, 5, 25, 20, 35, 0, 0);

    function actualizarRestante() {
      const ahora = new Date();
      const diffMs = fecha - ahora;
      if (diffMs > 0) {
        // Calcular días, horas y minutos restantes
        const totalSegundos = Math.floor(diffMs / 1000);
        const dias = Math.floor(totalSegundos / (3600 * 24));
        const horas = Math.floor((totalSegundos % (3600 * 24)) / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;

        countdown.style.display = 'flex';
        let texto = "";
        if (dias > 0) texto += `${dias}:`;
        texto += `${horas}:${minutos}:${segundos}`;
        countdownH1.textContent = texto;

        if (videoContainer) videoContainer.style.display = "none";
        if (verVideoBtnDesktop) verVideoBtnDesktop.style.display = "none";
        if (verVideoBtnMobile) verVideoBtnMobile.style.display = "none";
        if (verVideoClick) verVideoClick.style.display = "none";
      } else {
        if (videoContainer) videoContainer.style.display = "flex";
        clearInterval(intervaloRestante);
      }
    }

    actualizarRestante();
    const intervaloRestante = setInterval(actualizarRestante, 1000);
  }
});
