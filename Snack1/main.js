/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 */

const myArray = [


    {
        nome: 'thunder',
        pesoKg: '5'
    },

    {
        nome: 'bolt',
        pesoKg: '4'
    },

    {
        nome: 'lightening',
        pesoKg: '3'
    }

    
];

console.log(myArray);


// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

function biciPiuLeggera ({nome, pesoKg}) {
    

    let biciLeggera = myArray[0];

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].pesoKg < biciLeggera.pesoKg) {
            biciLeggera = myArray[i]
        }
    };
    return biciLeggera;
}

const {nome, pesoKg} = biciPiuLeggera(myArray);
console.log(`Il nome è: ${nome}. Il peso è: ${pesoKg}`);
// biciPiuLeggera(pesoMinore);