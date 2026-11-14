const nombre = 5

for(let i = 0; i <= 10;i++){
  let resultat = nombre * i ;
  console.log(`${nombre} x ${i} = ${resultat}`)

}
let compteurvoyelle = 0
let phrase = "bonjour tout le monde"
 for (let i = 0 ; i <= phrase.length;i++){
  if (phrase[i] === "a" || phrase[i] === "e"|| phrase[i]=== "i" || phrase[i] === "o" || phrase[i] === "u" || phrase[i] === "y"){
   compteurvoyelle++
  }
 }
 console.log(`dans la ${phrase} il y a ${compteurvoyelle}`)

 let nombres = [12,45,7,89,23,56,3];

for (let m = 0 ; m <= nombres.length; m++){
  if(nombres[m] % 3 === 0){
   console.log("fizz")
  }
  else if( nombres[m] % 5 ===0){
    console.log("Buzz")
  }
  else if(nombres[m] % 5 === 0 && nombres[m] === 0){
    console.log("FizzBuzz")
  }
  else{
    console.log(nombres[m])
  }
}
const nombremystere = 5 ;
let nombrejoueur = ""

while(nombremystere !== nombrejoueur){
    nombrejoueur = Number(prompt("Devine le nombre mystère"));
  if (nombremystere > nombrejoueur){
    console.log("trop grand")
  }
  else if (nombremystere < nombrejoueur){
    console.log("trop petit")
  }
  else{
    console.log("bravo")
  }
}