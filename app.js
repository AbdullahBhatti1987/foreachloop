var fruits = [
  {
    title: "Mango",
    image: "./images/mango1.jpg",
    description: "Tropical stone fruit, sweet and juicy.",
    types: ["Sindhri", "Chaunsa", "Anwar Ratol", "Langra"],
    symbol: "King of fruits"
  },
  {
    title: "Watermelon",
    image: "./images/watermelon1.jpg",
    description: "Large, refreshing fruit with high water content.",
    types: ["Darya Khan", "Sugar Baby", "Charleston Gray"],
    symbol: "Summer favorite"
  },
  {
    title: "Peach",
    image: "./images/peach1.jpg",
    description: "Stone fruit, sweet and tangy.",
    types: ["Elberta", "Golden Jubilee", "Early Grande"],
    symbol: "Summer delight"
  },
  {
    title: "Strawberry",
    image: "./images/stawberry2.jpg",
    description: "Bright red, juicy, and sweet.",
    types: ["Chandler", "Camarosa", "Festival"],
    symbol: "Spring treat"
  },
  {
    title: "Cherry",
    image: "./images/cherry1.jpg",
    description: "Small, round, sweet or tart.",
    types: ["Bing", "Rainier", "Montmorency"],
    symbol: "Summer delight"
  },
  {
    title: "Pineapple",
    image: "./images/pineapple1.jpg",
    description: "Tropical fruit, sweet and tart.",
    types: ["Smooth Cayenne", "Queen", "Red Spanish"],
    symbol: "Tropical treat"
  },
  {
    title: "Guava",
    image: "./images/guava1.jpg",
    description: "Tropical fruit, sweet and aromatic.",
    types: ["Allahabad Safeda", "Lalit", "Sardar"],
    symbol: "Winter delight"
  },
  {
    title: "Orange",
    image: "./images/orange1.jpg",
    description: "Citrus fruit, sweet and tangy.",
    types: ["Kinnow", "Blood Orange", "Valencia"],
    symbol: "Winter favorite"
  },
  {
    title: "Banana",
    image: "./images/banana1.jpeg",
    description: "Tropical fruit, sweet and soft.",
    types: ["Dwarf Cavendish", "Williams", "Lady Finger"],
    symbol: "Year-round favorite"
  },
  {
    title: "Apple",
    image: "./images/apple1.jpg",
    description: "Crisp and sweet or tart.",
    types: ["Gala", "Golden Delicious", "Red Delicious"],
    symbol: "Autumn delight"
  },
  {
    title: "Pomegranate",
    image: "./images/pomegranate1.jpg",
    description: "Tart and juicy seeds.",
    types: ["Kandhari", "Bhagwa", "Ganesh"],
    symbol: "Autumn favorite"
  },
  {
    title: "Papaya",
    image: "./images/papaya1.jpg",
    description: "Tropical fruit, sweet and musky.",
    types: ["Red Lady", "Pusa Nanha", "Coorg Honey Dew"],
    symbol: "Year-round favorite"
  },
  {
    title: "Grapes",
    image: "./images/grapes1.jpg",
    description: "Small, round, sweet or tart.",
    types: ["Thompson Seedless", "Red Globe", "Concord"],
    symbol: "Summer favorite"
  },
  {
    title: "Cantaloupe",
    image: "./images/cantaloupe1.jpg",
    description: "Sweet, juicy melon.",
    types: ["Hale's Best Jumbo", "Ambrosia", "Athena"],
    symbol: "Summer treat"
  },
  {
    title: "Sapodilla",
    image: "./images/sapodilla1.jpg",
    description: "Sweet, malty flavor.",
    types: ["Kalipatti", "Cricket Ball", "Pala"],
    symbol: "Year-round favorite"
  },

];



var box = document.getElementById("box");

fruits.forEach(function (data, ind) {
  
  box.innerHTML += 
  
  `
    <div class="fruit" id="${+ind}">
    <h1>${data.title}</h1>
    <img src='${data.image}' style: width="500px", height="200px">
    <p>
    <span class="first">Description:</span><span class="last">${data.description}</span>
    <span class="first">Types:</span><span class="last">${data.types}</span>
    <span class="first">symbol:</span><span class="last">${data.symbol}</span>
    </p>
    <div class="buttons">
    <button onclick="edit(this)">Edit</button>
    <button onclick="khatam(this)">Delete</button>
    </div>
    </div>`  
});

  function khatam(element){
  var location = element.parentElement.parentElement.id
  fruits.splice(location, 1, )
  box.innerHTML = "";
  fruits.forEach(function (data, ind) {  
    box.innerHTML += 
    `
      <div class="fruit" id="${+ind}">
      <h1>${data.title}</h1>
      <img src='${data.image}' style: width="500px", height="200px">
      <p>
      <span class="first">Description:</span><span class="last">${data.description}</span>
      <span class="first">Types:</span><span class="last">${data.types}</span>
      <span class="first">symbol:</span><span class="last">${data.symbol}</span>
      </p>
      <div class="buttons">
      <button onclick="edit(this)">Edit</button>
      <button onclick="khatam(this)">Delete</button>
      </div>
      </div>`
  });
}

function edit(element){
  box.innerHTML = "";
  var location = element.parentElement.parentElement.id
  var category = prompt ('select Category', 'title, image, description, types, symbol')
  var temp = prompt ('Enter New Value', '')
  fruits.forEach(function (data, ind) { 
    fruits[location][category] = temp;
    box.innerHTML += 
    ` <div class="fruit" id="${+ind}">
      <h1>${data.title}</h1>
      <img src='${data.image}' style: width="500px", height="200px">
      <p>
      <span class="first">Description:</span><span class="last">${data.description}</span>
      <span class="first">Types:</span><span class="last">${data.types}</span>
      <span class="first">symbol:</span><span class="last">${data.symbol}</span>
      </p>
      <div class="buttons">
      <button onclick="edit(this)">Edit</button>
      <button onclick="khatam(this)">Delete</button>
      </div>
      </div>`
    });
}

 