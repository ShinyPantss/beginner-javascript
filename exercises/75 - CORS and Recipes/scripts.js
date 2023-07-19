// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

const endPoint = "https://recipes.beginnerjavascript.com/api"

const form = document.querySelector("form.search")

async function fetchRecipes(query){
    const res = await fetch (query);
    console.log(res)
    const result = await res.json();
    console.log(result)
    return result ;

}


async function handleSubmit(event){
    event.preventDefault()
    const el = event.currentTarget
    console.log(el.query.value)
    el.submit.disabled = true
    const recipes  = await fetchRecipes(el.query.value)
    
    el.submit.disabled = false
    console.log(recipes)
    
}
function displayRecipes(recipes){
    

}

form.addEventListener("submit", handleSubmit)
fetchRecipes(endPoint)