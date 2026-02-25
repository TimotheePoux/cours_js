/*
let toAdd = 0;
let result = 0;
while(toAdd<100){
    toAdd++;
    result+=toAdd;
}
console.log(result);
*/

let nb = 0;
do{
    nb = prompt("Saisir un nombre entre 1 et 100");
}while(nb<1 || nb>100);

let toAdd = 0;
let result = 0;
while(toAdd<nb){
    toAdd++;
    result+=toAdd;
}   
console.log(result);

let tab = ["Axel", "Bako Ebeleh", "maaeeel", "(●'◡'●)", "C4tb0y4ev3r", "Cacaramouille", "Clemy", "firix le caillou", "isa", "Lauraaaaaa"];
for(const val of tab){
    console.log(val);
}