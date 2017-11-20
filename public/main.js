// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'Dom Tutorial';

// console.log(document.doctype);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

var headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'Item Lister';

var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px black';


var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'yellow';
// items[0].style.color = 'red';


var ele = document.getElementsByTagName('ul');
console.log(ele);
ele[0].style.backgroundColor = "grey";
ele[0].style.padding = "10px";

// query selector
let h = document.querySelector('#header-title');
h.style.borderBottom = "solid 4px grey";


// this will select first input element 
let input = document.querySelector('input');
input.value = "enter Items here....";

var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor = "skyblue";


var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].style.backgroundColor = "pink";

titles[1].style.backgroundColor = "lightGreen"

var li_item = document.querySelectorAll('li:nth-child(odd)');
console.log(li_item);
for(let i = 0 ; i < li_item.length; i++){
	li_item[i].style.backgroundColor = "#f4f4f4";
}

var li_item2 = document.querySelectorAll('li:nth-child(even)');
console.log(li_item);
for(let i = 0 ; i < li_item2.length; i++){
	li_item2[i].style.backgroundColor = "#ccc";
}