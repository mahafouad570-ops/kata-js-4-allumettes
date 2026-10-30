let allumettes = 50;
function enleverAllumettes(allumette)  {
   allumettes = allumettes - allumette;
}

while (allumettes > 0) {
    let choix = prompt("Combien d'allumettes ?");
    if (choix > 6 || choix < 1 || choix > allumettes || isNaN(choix)) {
    alert("Choisis un nombre entre 1 et 6");
} else {
    enleverAllumettes(choix);
    console.log( allumettes);
}
}
alert("Bravo , tu as gagné");