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

const yourArray = [


    {
        nome: 'treno',
        pesoKg: '6'
    },

    {
        nome: 'bolide',
        pesoKg: '7'
    },

    {
        nome: 'biciDiDonMatteo',
        pesoKg: '8'
    }

    
];

console.log(myArray);


// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

function biciPiuLeggera(array) {
    

    let biciLeggera = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i].pesoKg < biciLeggera.pesoKg) {
            biciLeggera = array[i];
        }
    };
    return biciLeggera;
};

let {nome, pesoKg} = biciPiuLeggera(myArray);
console.log(`Il nome è: ${nome}. Il peso è: ${pesoKg}`);
let bici = biciPiuLeggera(yourArray);
nome = bici.nome;
pesoKg = bici.pesoKg;
console.log(`Il nome è: ${nome}. Il peso è: ${pesoKg}`);