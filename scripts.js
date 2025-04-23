const tabWords = [
  "chat",
  "arbre",
  "livre",
  "voiture",
  "plage",
  "vague",
  "fleur",
  "nager",
  "miel",
  "lune",
  "soleil",
  "rouge",
  "bleu",
  "train",
  "route",
];

const randomIndex = Math.floor(Math.random() * tabWords.length); // Génère un index entier aléatoire dans le tableau tabWords.
console.log(randomIndex);

const wordToGuess = tabWords[randomIndex]; // Utilise l’index entier aléatoire pour récupérer le mot à deviner depuis le tableau tabWords.
console.log(wordToGuess);

let index = 0;

let letterStock = []; // Les lettres seront stockées ici.

const regex = /^[a-zA-Z]$/;

const titleH1 = document.querySelector("h1");
const divWord1 = document.createElement("div");
const divWord2 = document.createElement("div");

titleH1.insertAdjacentElement("afterend", divWord1);
divWord1.insertAdjacentElement("afterend", divWord2);

for (let i = 0; i < wordToGuess.length; i++) {
  const spanWord1 = document.createElement("span");
  spanWord1.classList.add("letter-box");
  divWord1.appendChild(spanWord1);

  const spanWord2 = document.createElement("span");
  spanWord2.classList.add("letter-box");
  divWord2.appendChild(spanWord2);
}

const spansWord1 = divWord1.querySelectorAll("span");
console.log(spansWord1);

const spansWord2 = divWord2.querySelectorAll("span");
console.log(spansWord2);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const enteredWord = letterStock.join("");
    console.log(enteredWord);

    if (enteredWord.length === wordToGuess.length) {
      if (enteredWord === wordToGuess) {
        console.log("Bravo, vous avez trouvé le mot caché");
      } else {
        console.log("Dommage ! Le mot à deviner était : " + wordToGuess);
      }
    } else {
      console.log(
        "Le mot doit avoir exactement " + wordToGuess.length + " lettres"
      );
    }
  } else if (event.key === "Backspace") {
    letterStock.pop();
    if (index > 0) {
      index--;
      spansWord1[index].textContent = "";
      spansWord2[index].textContent = "";
    }
    console.log(letterStock);
  } else if (regex.test(event.key)) {
    if (letterStock.length < wordToGuess.length) {
      letterStock.push(event.key);
      console.log(letterStock);
      if (event.key === wordToGuess[letterStock.length - 1]) {
        spansWord1[index].setAttribute("class", "letter-box correct-letter");
        spansWord2[index].setAttribute("class", "letter-box correct-letter");
      } else {
        spansWord1[index].setAttribute("class", "letter-box incorrect-letter");
        spansWord2[index].setAttribute("class", "letter-box incorrect-letter");
      }
      spansWord1[index].textContent = event.key;
      spansWord2[index].textContent = event.key;
      index++;
    }
  } else {
    console.log("ceci n'est pas une lettre");
  }
});
