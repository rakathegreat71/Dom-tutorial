// traversing Dom
let itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "lightGray";

// child nodes	
// do not use this property cause it includes white spaces also
console.log(itemList.childNodes);
// so instead of it use
console.log(itemList.children);
// and do use firstChild instead use firstElementChild
// /there are some other properties like nextSibling or nextElementSibling
/*
previousSibling*/


// CreateElement section

let newDiv = document.createElement('div');
// adding class
newDiv.className = 'lol';
newDiv.id = "myId";
newDiv.setAttribute('title', "hello People");

let child = document.createTextNode('helloWorld');
newDiv.appendChild(child);

let container = document.querySelector('header .container');
container.appendChild(newDiv);
let h1 = document.querySelector('header h1');
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);
console.log(newDiv);
