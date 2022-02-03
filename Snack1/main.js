/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 */

const myArray = [


    bici1 = {
        nome: 'thunder',
        pesoKg: '2'
    },

    bici2 = {
        nome: 'bolt',
        pesoKg: '1.8'
    },

    bici3 = {
        nome: 'lightening',
        pesoKg: '1.7'
    }

    
];

console.log(bici1);
console.log(bici2);
console.log(bici3);

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

function biciPiuLeggera ({nome, pesoKg}) {
    console.log(`Il nome è: ${nome}. Il peso è: ${pesoKg}`);

    let pesoMinore = ''

    for (let i = 0; i < myArray.lenght; i++) {
        if (myArray[i].pesoKg < 1.8) {
            pesoKg = pesoMinore;
        }
    };
    return pesoMinore;
    
}

biciPiuLeggera(pesoMinore);