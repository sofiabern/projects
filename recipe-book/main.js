const API_KEY = "f010d3cd78384e2facc609bda900e19c";
const BASE_URL = "https://api.spoonacular.com/recipes/"
const END_POINT = "random"

const notFound = "./img/notfound.jpg"

const ulEl = document.querySelector('.recipe-list')

async function fetchDataFromAPI() {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    number: 10,
  });

    const response = await fetch(`${BASE_URL}${END_POINT}?${params}`)
    if(!response.ok){
        alert("Sorry, something wrong happened while fetching")
        return
    }
    const data = await response.json()
    return data
    


}

function createMarkup(data){

return data.recipes.map(({image, title, sourceUrl, extendedIngredients}) =>{
    const ingredients = extendedIngredients.map(ingredient => ingredient.name).join(', ')
  return  `<li class="recipe-item">
<img src="${image || notFound}" alt="photo of the dish">
<h2>${title}</h2>
<p><span>Ingredients: </span>${ingredients}</p>
<a href="${sourceUrl}">View the recipe</a>
</li>`} ).join(" ")
}

async function renderMarkup(){
const data = await fetchDataFromAPI()
 ulEl.innerHTML = createMarkup(data)
}

renderMarkup()