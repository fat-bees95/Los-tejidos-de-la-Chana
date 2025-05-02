document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".modal-img");
  images.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      // Evitar abrir múltiples modales
      if (document.querySelector(".custom-modal")) return;

      const modal = document.createElement("div");
      modal.classList.add("custom-modal");
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100vw";
      modal.style.height = "100vh";
      modal.style.background = "rgba(0, 0, 0, 0.8)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.zIndex = "1000";

      // Cierre haciendo clic fuera de la imagen
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
      });

      // Imagen ampliada
      const imgClone = document.createElement("img");
      imgClone.src = img.src;
      imgClone.style.maxWidth = "90%";
      imgClone.style.maxHeight = "90%";
      imgClone.style.borderRadius = "10px";
      imgClone.style.animation = "zoom 0.3s";

      // Caption (texto alternativo)
      const caption = document.createElement("p");
      caption.textContent = img.alt;
      caption.style.color = "#ccc";
      caption.style.marginTop = "10px";
      caption.style.textAlign = "center";
      caption.style.maxWidth = "90%";

      // Contenedor para imagen y caption
      const container = document.createElement("div");
      container.style.textAlign = "center";
      container.appendChild(imgClone);
      container.appendChild(caption);

      modal.appendChild(container);
      document.body.appendChild(modal);
    });
  });

  // Cierre con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.querySelector(".custom-modal");
      if (modal) modal.remove();
    }
  });
});
