/*
john
Hello, bob
bob
*/
let userName = 'john';

function showMessage()
{
    userName = 'bob';
    
    let message = 'Hello, ' + userName;
    console.log(message);
}

console.log(userName);

showMessage();

console.log(userName);
