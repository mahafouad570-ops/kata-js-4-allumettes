const tas = document.getElementById("tas");
const message = document.getElementById("message");
const inputChoix = document.getElementById("choix");
const boutonJouer = document.getElementById("jouer");



let allumettes = 50;
let joueur = 1;
let nomberJoueurs = Number(prompt("Combien de joueurs ?"));
while (isNaN(nomberJoueurs) || nomberJoueurs < 2) {
  nomberJoueurs = Number(prompt("Entre un nomber de joueurs(2 minimum)"));
}
function enleverAllumettes(allumette) {
  allumettes = allumettes - allumette;
}
function afficher() {
  tas.textContent = "|".repeat(allumettes);
  message.textContent = "joueur " + joueur + " , à toi !";
}

afficher();

boutonJouer.addEventListener("click" , function() {
  let choix = Number(inputChoix.value);
  // let choix = prompt("Joueur " + joueur + " , Combien d'allumettes ?");
  if (choix > 6 || choix < 1 || choix > allumettes || isNaN(choix)) {
    message.textContent = "Choisis un nombre entre 1 et 6 " + " il reste " + allumettes + " allumettes";
  } else {
    enleverAllumettes(choix);
    console.log(allumettes);
    if (allumettes > 0) {
      if (joueur < nomberJoueurs ) {
        joueur = joueur + 1;
      } else {
        joueur = 1;
      }
      afficher();
    } else {
      tas.textContent = "";
      message.textContent = "Bravo joueur " + joueur + " , tu as gagné";
      boutonJouer.disabled = true;
    }
  }
  inputChoix.value = "";
})
