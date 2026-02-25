/*
let number = 5;
let text = '5';
let isRainingToday = false;

console.log(number == text);
console.log(number === text);
if (isRainingToday) console.log("Where is my Umbrella ?");
*/

let ageUser = prompt("T'as quel âge ?") //Demande à l'utilisateur quel âge il a

if (ageUser < 0){ //Vérifie si l'âge de l'utilisateur est négatif
    console.log("Je te crois pas");    
}
else if (ageUser == 18){
    console.log("L’utilisateur a ", ageUser," an(s),il vient d’être majeur");
}
else if (ageUser == 25){
    console.log("L’utilisateur a ", ageUser," an(s),il vient d’être majeur");
}
else if (ageUser < 18){ //Vérifie si l'âge de l'utilisateur est inférieur à 18
    console.log("L’utilisateur a ", ageUser," an(s), il est mineur!");
}
else if (ageUser > 62){ //Vérifie si l'âge de l'utilisateur est supérieur à 62
    console.log("L’utilisateur a ", ageUser ," an(s), il est majeur mais aussi retraité !!")
}
else{ 
    console.log("L’utilisateur a ", ageUser," an(s), il est majeur!");
}