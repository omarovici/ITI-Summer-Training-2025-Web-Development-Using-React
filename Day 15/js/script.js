let searchInput = document.querySelector("#searchInput");
let userSelect = document.querySelector("#userSelect");
let row = document.querySelector("#row");

(function () {
  const foodItems = [
    "beef", "chicken", "potato", "pizza", "carrot", "chips", "cake", "corn", "onion", "tomato", "lemon", "lemon", "orange", "mango", "ribs", "fish", "goat", "lamb", "donuts"
  ];
  let options = foodItems.map(item => `<option value="${item}">${item}</option>`).join("");
  userSelect.innerHTML = options;
})();

async function getRecipes(term = "pizza") {
  try {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${term}`);
    const data = await response.json();
    displayRecipes(data.recipes);
  } catch (error) {
    row.innerHTML = `<p class="error-message">No recipes found for "${term}"</p>`;
  }
}

function displayRecipes(recipes) {
  let cards = recipes.map(recipe => `
    <div class="product-card">
      <img src="${recipe.image_url}" alt="${recipe.title}">
      <div class="product-info">
        <div class="product-title">${recipe.title}</div>
        <div class="product-publisher">${recipe.publisher}</div>
      </div>
    </div>
  `).join("");
  row.innerHTML = cards;
}

getRecipes();

searchInput.addEventListener("input", e => {
  getRecipes(e.target.value.trim().toLowerCase());
});

userSelect.addEventListener("change", e => {
  getRecipes(e.target.value.toLowerCase());
});
