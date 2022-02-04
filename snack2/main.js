// Snack2 
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


const myArray = [
    {
        nome: 'FCMilan',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Napoli',
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: 'ASRoma',
        punti: 0,
        falliSubiti: 0
    }
];

console.log(myArray);




// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.



for (let i = 0; i < myArray.length; i++) {
    myArray[i].punti = Math.floor(Math.random()*50)
    myArray[i].falliSubiti = Math.floor(Math.random()*50)
}
console.log(myArray);
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 

// creare un nuovo array vuoto

let arrayNomiEFalliSubiti = [];

// ciclo myArray
//all'int del ciclo faccio destr. elem. iesimo
//push. di destruttur. fatta nell'array nuovo


for (let i = 0; i < myArray.length; i++) {
    let team = myArray[i];
    const {nome, falliSubiti} = team;
    console.log(nome, falliSubiti);
    arrayNomiEFalliSubiti.push({nome, falliSubiti});
}

console.log(arrayNomiEFalliSubiti);











