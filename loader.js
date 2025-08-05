/** CONFIGURATION **/
const loaderConfig = {
  title: "🎉 Big News! 🎉",
  message: `We are excited to announce the launch of 
             <span class="highlight-word">Udipi</span> on <span style="font-weight: bold;">XLeats!</span>`,

  duration: 3000,
  oncePerDay: false,
};

document.addEventListener("DOMContentLoaded", () => {
  /** Setup announcement text dynamically **/
  const loader = document.getElementById("loader");
  document.getElementById("loader-title").innerText = loaderConfig.title;
  document.getElementById("loader-message").innerHTML = loaderConfig.message;

  /** Confetti Effect **/
  function launchConfetti() {
    const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6A5ACD", "#FF9F43", "#2ECC71"];
    for (let i = 0; i < 120; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      document.body.appendChild(confetti);

      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;

      setTimeout(() => confetti.remove(), 5000);
    }
  }

  /** Inject confetti CSS dynamically **/
  const style = document.createElement("style");
  style.innerHTML = `
    .confetti {
      position: fixed;
      top: 0;
      width: 10px;
      height: 10px;
      opacity: 0.9;
    }
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  /** Show loader logic **/
  const today = new Date().toDateString();
  const seenDate = localStorage.getItem("seenLoaderDate");

  if (!loaderConfig.oncePerDay || seenDate !== today) {
    loader.style.display = "flex";
    setTimeout(() => {
      loader.classList.add("hidden");
      launchConfetti();
      if (loaderConfig.oncePerDay) {
        localStorage.setItem("seenLoaderDate", today);
      }
    }, loaderConfig.duration);
  } else {
    loader.style.display = "none";
  }
});
