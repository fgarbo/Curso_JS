

//arrays

let friends = ['Marcos', 'Silvia', 'Elisa'];
friends[2] = 'Flavio';
console.log(friends[2]);

//adicionando
/*
const num = [7, 8, 9];
num.push(10, 11, 12); final
num.unshift(4, 5, 6); começo
num.splice(3, 0, 4, 5, 6); meio
console.log(num);*/


//primitivos

const num = [7, 8, 9];
console.log(num.indexOf(4));
console.log(num.includes(4));

//referencia

/*const movies = [
    {id: 1, movieName: 'Titanc'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]
console.log(movies);
console.log(movies.find(function(movie){
    return movie.movieName == 'The Matrix'
}))*/


//arrow function

const movies = [
    {id: 1, movieName: 'Titanc'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]
console.log(movies);
console.log(movies.find(movie => movie.movieName == 'The Matrix')
    
)


// removendo itens da array

const num1 = [5, 6, 7, 8];
const final = num1.pop(); //ultimo
const final1 = num1.shift();  //primeiro
const final2 = num1.splice(2, 1); //meio

console.log(num1);
console.log(final);
console.log(final1);
console.log(final2);

//esvaziando uma array

let num2 = [5, 6, 7, 8];   //trocou por let, pq const não pode mudar

num2 = [];

console.log(num2);


//concatenando arrays

let number = [5, 6, 7, 8];
let letters = ['a', 'b', 'c'];

all = number.concat(letters);
half = all.slice(3, 5);

console.log(all);
console.log(half);

//join array:  adicionar qquer coisa a uma array

let clients = ['flavio', 'Jose', 'Renata'];
console.log(clients);
let clientsJoin = clients.join(' a ,');
console.log(clientsJoin);



//elementos array

/*const tempLondon = [18, 13, 8, 2];

const tempPositive = tempLondon. every(function(value){
    return value >= 0;
})
console.log(tempPositive);*/



//filtrando Array

const tempLondon = [18, 13, 8, 2];

const tempPositive = tempLondon. filter(value => value >= 0); 
    
console.log(tempPositive);

//function Declaration

function movie(){
    console.log('The Matrix');
}

movie();

//Hoisting move as funções para cima para serem executadas primeiro
//function Expression

//car();
const car = function(){
    console.log('Tesla');
}
car();

const truck = car;
truck();

/*function price(){      //argumentos
    //return a + b;
    let total = 0;
    for(let value of arguments);  //loop
        total += value
    return total
}
console.log(price(10, 20, 30, 40));*/


function carLoan(loan, rate, years){
return loan * rate / 100 * years;

}
console.log(carLoan(20000, 2.5, 5))