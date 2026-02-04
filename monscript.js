/*
let number = 5;
let text = '5';
let isRainingToday = false;

console.log(number == text);
console.log(number === text);
if (isRainingToday) console.log("Where is my Umbrella ?");
*/

let ageUser = prompt("T'as quel âge ?")

if (ageUser < 0){
    console.log("Je te crois pas");    
}
else if (ageUser < 18){
    console.log("L’utilisateur a ", ageUser," an(s), il est mineur!");
}
else if (ageUser > 62){
    console.log("L’utilisateur a ", ageUser ," an(s), il est majeur mais aussi retraité !!")
}
else{
    console.log("L’utilisateur a ", ageUser," an(s), il est majeur!");
}