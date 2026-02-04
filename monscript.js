let tabJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
let tabMois = ["Janvier, Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
let maDateV1 = {
    "jour" : tabJours[2],
    "mois" : tabMois[1]
};
let maDateV2 = {};
maDateV2.jour = tabJours[2];
maDateV2.mois = tabMois[1];

let numJour = 4;
let isHiver = true;

console.log('V1: ',maDateV1.jour, maDateV1.mois, 'V2: ',maDateV2.jour, maDateV2.mois);