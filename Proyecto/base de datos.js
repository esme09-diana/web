
const recipes = {
  "Tacos": {
    ingredients: ["Tortillas de maíz", "Carne asada", "Cebolla", "Cilantro", "Limón", "Salsa"],
    steps: [
      "Cocina la carne asada a la parrilla.",
      "Coloca la carne en las tortillas.",
      "Agrega cebolla, cilantro, y salsa al gusto.",
      "Exprimir un poco de limón sobre los tacos y ¡listo!"
    ]
  },
  "Ensalada César": {
    ingredients: ["Lechuga romana", "Pollo a la parrilla", "Queso parmesano", "Croutons", "Aderezo César"],
    steps: [
      "Lava y corta la lechuga.",
      "Corta el pollo en tiras y agrégalo a la ensalada.",
      "Añade queso parmesano rallado y croutons.",
      "Vierte el aderezo César y mezcla todo."
    ]
  },
  "Spaghetti a la Boloñesa": {
    ingredients: ["Spaghetti", "Carne molida", "Salsa de tomate", "Ajo", "Cebolla", "Albahaca", "Queso parmesano"],
    steps: [
      "Cocina el spaghetti según las instrucciones del paquete.",
      "Fría la carne molida con cebolla y ajo.",
      "Añade salsa de tomate y hierbas.",
      "Mezcla el spaghetti con la salsa y sirve con queso parmesano."
    ]
  }
};

// Función para mostrar los detalles de una receta
function showRecipe(recipeName) {
  const recipe = recipes[recipeName];
  const recipeDetail = document.getElementById('recipe-detail');
  
  let ingredientsHTML = '<ul>';
  recipe.ingredients.forEach(ingredient => {
    ingredientsHTML += `<li>${ingredient}</li>`;
  });
  ingredientsHTML += '</ul>';
  
  let stepsHTML = '<ol>';
  recipe.steps.forEach(step => {
    stepsHTML += `<li>${step}</li>`;
  });
  stepsHTML += '</ol>';
  
  recipeDetail.innerHTML = `
    <h2>${recipeName}</h2>
    <h3>Ingredientes:</h3>
    ${ingredientsHTML}
    <h3>Instrucciones:</h3>
    ${stepsHTML}
  `;
  recipeDetail.style.display = 'block';
}

// Función para buscar recetas
function searchRecipes() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const recipesList = document.querySelectorAll('.recipe');
  
  recipesList.forEach(recipe => {
    const recipeName = recipe.getAttribute('data-name').toLowerCase();
    if (recipeName.includes(searchQuery)) {
      recipe.style.display = 'block';
    } else {
      recipe.style.display = 'none';
    }
  });
}
