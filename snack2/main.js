// Snack2 
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


const myArray = [
    squadra1 = {
        nome: 'FCMilan',
        punti: 0,
        falliSubiti: 0
    },

    squadra2 = {
        nome: 'Napoli',
        punti: 0,
        falliSubiti: 0
    },

    squadra3 = {
        nome: 'ASRoma',
        punti: 0,
        falliSubiti: 0
    }
];

console.log(myArray);




// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.



let varPunti = Math.floor(Math.random()*50) + 1;
console.log(varPunti);

let varFalliSubiti = Math.floor(Math.random()*50) + 1;
console.log(varFalliSubiti);

for (let i = 0; i < myArray.length; i++) {
    console.log(i);
    
    
}
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 

