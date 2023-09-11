var itemList = document.querySelector('#items');

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='yellow';

console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='I LOVE THIS';

console.log(itemList.lastChild);

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='I LOVE THIS MORE';

console.log(itemList.childNodes);

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';

//Creating a element

var newDiv=document.createElement('div');
newDiv.className='First';
newDiv.id='Second';
newDiv.setAttribute('title','hello First&Second');

var newDivText=document.createTextNode('HEllo word');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore (newDiv, h1);

var itemList = document.getElementById("items");
var newItem = document.createElement("li");
newItem.className = "list-group-item";
newItem.textContent = "Hello World";
var firstItem = itemList.querySelector("li");
itemList.insertBefore(newItem, firstItem);