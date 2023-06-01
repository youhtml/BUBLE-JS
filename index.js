const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  // on vient de crer un element span cf log
  bubble.classList.add("bubble");
  // injecte une class
  // bubble.classList.remove("bubble") pour enlever
  // bubble.classList.toggle("bubble") mettre si elle n'yest pas enlever si ele elle y est
  document.body.appendChild(bubble);

  // console.log(Math.random() * 100 + 100);
  // on appel la methode random de l'object Math
  // de base produit un chiffre aleatoire entre 0 et 1 est avec le *100 entre 0 et 100
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  // bubble est un element en absolute on lui dit en left tu es en top tu es la
  bubble.style.top = Math.random() * 100 + 50 + "%";
  // tjr mettre l'unité
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //   on cree une const et on fait une ternaire c'est un if else. donc Mrand est + constpMin est + sinn -

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  // on recup la var du css est on randomise la left tjr ne pas oublier les unités
  //   on at tous englobé dans la fonstion bubbleMaker
  bubble.addEventListener("click", () => {
    // donc pour chaque click counter s'incremente
    counter++;
    //
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  //   le setTimeout permet de prog la  supression de l'evenement
  // on as mis pris tte les 8s car l'anim est programer en css
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

// donc on met la fonction dans le setinterval est jouer a interval regulier
setInterval(bubbleMaker, 3000);

// textContent pour injecter du text dans les balises
// innhtml pour injecter une balise
