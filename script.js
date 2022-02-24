let h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.parentElement);
console.log(h1.children); //children returns an empty list

let ul = document.querySelector('ul');
console.log(ul.children);
console.log(ul.lastElementChild);
console.log(ul.lastElementChild.childNodes[0].nodeType);
console.log(ul.lastElementChild.childNodes[0]);

