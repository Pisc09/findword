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
const sectionDiv = document.createElement("div");

titleH1.insertAdjacentElement("afterend", sectionDiv);

for (let i = 0; i < wordToGuess.length; i++) {
  const typedLetter = document.createElement("span");
  typedLetter.classList.add("letter-box");
  sectionDiv.appendChild(typedLetter);
}

const spans = sectionDiv.querySelectorAll("span");
console.log(spans);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const enteredWord = letterStock.join("");
    console.log(enteredWord);

    if (enteredWord.length === wordToGuess.length) {
      if (enteredWord === wordToGuess) {
        console.log("Bravo");
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
      spans[index].textContent = "";
    }
    console.log(letterStock);
  } else if (regex.test(event.key)) {
    if (letterStock.length < wordToGuess.length) {
      letterStock.push(event.key);
      console.log(letterStock);
      if (event.key === wordToGuess[letterStock.length - 1]) {
        spans[index].setAttribute("class", "letter-box correct-letter");
      } else {
        spans[index].setAttribute("class", "letter-box incorrect-letter");
      }
      spans[index].textContent = event.key;
      index++;
    }
  } else {
    console.log("ceci n'est pas une lettre");
  }
});
