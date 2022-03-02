let h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.parentElement);
console.log(h1.children); //children returns an empty list

let ul = document.querySelector('ul');
console.log(ul.children);
console.log(ul.lastElementChild);
console.log(ul.lastElementChild.childNodes[0].nodeType);
console.log(ul.lastElementChild.childNodes[0]);

// Select the section with an id of container without using querySelector.
console.log(document.getElementById("container"));

// Select the section with an id of container using querySelector.
console.log(document.querySelector("#container")); 

// Select all of the list items with a class of "second".
console.log(document.querySelectorAll(".second"));

// Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelector("ol .third"));

// Give the section with an id of container the text "Hello!".
document.getElementById("container").innerHTML = "Hello!";

// Add the class main to the div with a class of footer.
document.querySelector('.footer').classList.add('main');

// Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove('main');

// Create a new li element.
let li = document.createElement("li");

//  Give the li the text "four".
let txt = document.createTextNode("four");
li.appendChild(txt);

//  Append the li to the ul element.
document.querySelector("ol").appendChild(li);

// Loop over all of the li's inside the ol tag and give them a background color of "pink".
console.log(document.querySelectorAll("ol li"));
for(let i = 0; i < 3; i++) {
    document.querySelectorAll("ol li")[i].style.backgroundColor = "pink";
}
let ol = document.querySelector("ol");
ol.style.backgroundColor = "magenta";

// Remove the third item in the ol
let olLastItem = ol.lastElementChild;
ol.removeChild(olLastItem);

// onlick functionality
ol.onclick = function (){
  this.style.backgroundColor = "red";
};

