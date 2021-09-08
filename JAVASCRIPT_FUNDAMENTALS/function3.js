/*
*Ann*: Hello
Ann
*/
function showMessage(from,text)
{
  
    from = '*' + from + '*';
    
    console.log(from + ': ' + text);
}

let from = "Ann";
showMessage(from,"Hello");
console.log(from)
