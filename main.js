let userInput = document.querySelector('.user-input');
let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
  recipe = userInput.value;
  getData(recipe);
});
let recipeList = [];

const API_ID = `01bfaed3`;
const API_KEY = `f76a8dd1feb49872198a8499513ec02a`;

let url = new URL(
  `https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}`
);

async function getData() {
  url.searchParams.set('q', recipe);
  const response = await fetch(url);
  const data = await response.json();
  recipeList = data.hits;
  render();
  console.log('data', data);
  console.log('list', recipeList);
}

getData();

function render() {
  let recipeHTML = recipeList
    .map(dish => {
      return `<div>${dish.recipe.label}</div>
      <img src="${dish.recipe.image}"`;
    })
    .join('');
  document.getElementById('recipe-board').innerHTML = recipeHTML;
}
