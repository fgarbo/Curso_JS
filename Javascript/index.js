console.log('Olá Mundo');

let firstName = 'Flavio';
let lastName = 'Garbo';
console.log(firstName, lastName);

let price = 30; // se usar "const" ela não trocará o valor
price = 20;
console.log(price);

//primitivos

let itemName = 'Pen';             //string
let intemPrice = 3;               //number
let itemAAvailable = true;         // bool
//let itemColor;                    // undefined
let itemColor = 'Red';



//referencia

let pen = {
    itemName: 'Pen',
    itemPrice: 3,                       //objeto: grupo de informação referente a uma coisa só
    itemAAvailable: true,
    itemColor: 'Red',

}

pen.itemColor = 'blue';
console.log(pen);

let friends = ['Marcos','Letícia','Julia'];            //array
friends[2] = 'Flavio'; //se quiser trocar
console.log(friends[0]);

function  salesStatus(status){
    console.log('Transaction ' + status);               //funções
}
salesStatus("Approved");

function percentage10(price){
    return price - (price * 10/100);
    
}
console.log(percentage10(20));

//operadores aritmeticos

//let num1 = 3                    
//let num2 = 2

//console.log(num1 + num2);  // % resto  **exponencial    ++ incremento   -- decremento

//num1++ //virou 4

//num1 += 20 //atribuição + 20    *=   -=  /=

// operadores de comparação <  e  >  ou <= e >=

// operadores de igualdade  === ou /==

//__________________________________________________


// operadores ternarios

let driver = 90;
let speed = driver > 110? 'Above': 'Below';

console.log(speed);


// operadores logicos   (AND &&, OR ||, NOT!)

let temIdadeMinima = true;
let temTituloEleitor = true;

let podeVotar = temIdadeMinima && temTituloEleitor;
console.log('Pode votar: ' + podeVotar);

let podeViajar = !podeVotar;
console.log('Pode viajar: ' + podeViajar);

// operadores logicos com string

let corCLiente = undefined;
let corEstoque = 'black';
let corVendida = corCLiente || corEstoque;

console.log(corVendida);


// precedencia dos operadores (* vem primeiro) ou parenteses
let num1 = 3 + 4 * 2;
console.log(num1);


//if else

let driverSpeed = 80

if (driverSpeed > 110){
console.log('Fast');

}

else if (driverSpeed > 40 && driverSpeed <= 110){
    console.log('Normal');
}

else{
    console.log('low');
}


// switch e case


let airPort = 'MCO';


switch (airPort){
    case 'MCO':
        console.log('Orlando');
        break;   //diferente do if e else, precisa ter um break
    case 'JFK':
        console.log('j. Kennedy');
        break;
    case 'SEA':
            console.log('Seattle');
        break;
}


// for loop

//for (i = 0; i <= 10; i++){
    //console.log('Numero ', i);
//}

//_______________________________________________

// while loop

//while (i <=10){ 
    //if (i===8) break                              //se adicionar um break
    //console.log('Numero ', i);
    //i++;
//}


//_______________________________

// do while loop

//i = 1;
//do {
   // console.log("Numero ", i);
  //  i++;
//} while (i<=10);


// for in loop


//const  myCar = {
    //model: 'BMW',
    //year: 2022
//}

//for (let i in myCar);
//console.log(i, myCar[i]);

//const friend = ['Marcos', 'Ana', 'José'];

//for (let i of friend);
//console.log(friend[i]);














