document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".modal-img");
  images.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
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

      // Click outside image closes modal
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
      });

      const imgClone = document.createElement("img");
      imgClone.src = img.src;
      imgClone.style.maxWidth = "90%";
      imgClone.style.maxHeight = "90%";
      imgClone.style.borderRadius = "10px";

      modal.appendChild(imgClone);
      document.body.appendChild(modal);
    });
  });

  // Pressing ESC closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.querySelector(".custom-modal");
      if (modal) modal.remove();
    }
  });
});
