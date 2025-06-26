document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      // header.classList.add("header-contrast");
    } else {
      // header.classList.remove("header-contrast");
    }
  });

  const verVideoBtn = document.querySelector(".videoButton");
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const closeBtn = document.querySelector(".close");
  

  if (verVideoBtn) {
    verVideoBtn.addEventListener("click", function () {
      // modal.style.display = "block";
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


  const countdown = document.getElementById('countdown');
  if (countdown) {
    const fecha = new Date(2025, 5, 29, 20, 35, 0, 0);

    function dobleDigito(num) {
      return num.toString().padStart(2, "0");
    }

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

        let texto = "";
        if (dias > 0) texto += `${dobleDigito(dias)} : `;
        texto += `${dobleDigito(horas)} : ${dobleDigito(minutos)} : ${dobleDigito(segundos)}`;
        countdown.textContent = texto;
        console.log(texto)

        // if (verVideoBtn) verVideoBtn.style.display = "none";
      } else {
        clearInterval(intervaloRestante);
      }
    }

    actualizarRestante();
    const intervaloRestante = setInterval(actualizarRestante, 1000);
  }
});
