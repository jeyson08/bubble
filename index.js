const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  // console.log(size);

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // Une fois qu'on termine la logique d'une bulle, on le met dans une fonction

  // Destruction des bulles au click
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  // Destruction des bulles au bout de 8 secondes
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

// Créer une bulle toutes les X secondes
setInterval(() => {
  bubbleMaker();
}, 1000);
// pareil que setInterval(bubbleMaker, 300);
