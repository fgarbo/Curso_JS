// objetos (forma de organizar o código)
/*
let bookTitle = 'Atomic Habits';
let bookAuthor = 'James CLear';
let bookPages = 306;


function createBook (title, author, pages, ){                            //factory
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
            printBook: function(){
            console.log('printing')
        }
    
    }
    return book;
}

const book1 = createBook('Atomic', 'James', 306);
const book2 = createBook('Think', 'Napolean', 401);

book1.color = 'White';

console.log(book1);
console.log(book2);
*/

function CreateBook (title, author, pages, ){                            //constructor funcão começa com maiusculo
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
        
           
        }
    
const book1 = new CreateBook('Atomic', 'James', 306);
const book2 = new CreateBook('Think', 'Napolean', 401);

console.log(book1);
console.log(book2);


// built in

console.log(Math.max(1, 3, 15, 2, 7, 4));
console.log(Math.min(1, 3, 15, 2, 7, 4));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
//site para pesquisa sobre java

let message = 'Hey, my name is Flavio';
console.log(message.startsWith('Hey'));
console.log(message.length);
console.log(message.includes('Val'));
console.log(message.endsWith('Flavio'));


// templates literals


let firstName = 'Joe';
const email = 'Hi Joe, \nThe meething is confirmed!';

//ou

const email2 = `Hi ${firstName},
The meething is confirmed!`

console.log(email);
console.log(email2);