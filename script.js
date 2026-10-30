let allumettes = 50;
let joueur = 1;
function enleverAllumettes(allumette) {
  allumettes = allumettes - allumette;
}

while (allumettes > 0) {
  let choix = prompt("Joueur " + joueur + " , Combien d'allumettes ?");
  if (choix > 6 || choix < 1 || choix > allumettes || isNaN(choix)) {
    alert("Choisis un nombre entre 1 et 6 " + " il reste " + allumettes + " allumettes");
  } else {
    enleverAllumettes(choix);
    console.log(allumettes);
    if (allumettes > 0) {
      if (joueur === 1) {
        joueur = 2;
      } else {
        joueur = 1;
      }
    }
  }
}
alert("Bravo joueur " + joueur + ", tu as gagné");
