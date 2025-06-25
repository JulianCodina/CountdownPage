document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("header-contrast");
    } else {
      header.classList.remove("header-contrast");
    }
  });
  const verVideoBtn = document.querySelector(".anuncio button");
  if (verVideoBtn) {
    verVideoBtn.addEventListener("click", function () {
      const anuncio = document.querySelector(".anuncio");
      const videoBorder = document.querySelector(".video-border");
      if (anuncio && videoBorder) {
        anuncio.classList.remove("anuncio");
        anuncio.classList.add("anuncio-modificado");
        videoBorder.classList.remove("video-border");
        videoBorder.classList.add("video-border-modificado");
      }
    });
  }
});
