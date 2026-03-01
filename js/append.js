//1. parent mode
const maincontainer = document.getElementById('main-container');

//2.create child
const placesSection= document.createElement('section');

// create h1
const h1=document.createElement('h1');
h1.innerText='Pleaces I Want to visit'
placesSection.appendChild(h1)

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText ='bandorbon';
ul.appendChild(li1);
placesSection.appendChild(ul);

const li2= document.createElement('li');
li2.innerText ='sundorban';
ul.appendChild(li2);

//3.append placesSection to the mainContainer
maincontainer.appendChild(placesSection)





//easy are to create HTML
const booksSection = document.createElement('section');
booksSection.innerHTML =`
<h1> Books I need to read </h1>
<ul>
  <li> Physice </li>
  <li> Chemistry </li>
  <li>Math</li>
  <li>Biology</li>
</ul>
`
maincontainer.appendChild(booksSection);