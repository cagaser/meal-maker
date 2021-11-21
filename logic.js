const itemSelections = {
    "base" : ["rice", "potatoes", "spaghetti", "penne", "wraps", "pita", "brown rice", "sweet potatoes", "fussili", "quinoa", "cous cous"],
    "protein" : ["falaffel", "vegan chicken pieces", "vegan minced", "red lentils", "black beans", "tofu", "tofu marinated", "soybeans"],
    "mix": ["mushroom", "red bellpepper", "green bellpepper", "aubergine", "brocolli", "cucumber", "asparagus", "carrot", "brocolli", "cauliflower"],
    "toppings": ["dried nori", "sesame seed", "chia seed", "hemp seed", "pumpkin seed", "peanuts", "almonds", "cashews"],
    "dressings": ["green goddess", "tahini dressing", "teriyaki", "oestersauce", "garlic sauce"],
    "greens": ["spinach", "paksoi", "chinese cabbage", "cabbage", "mixed salad", "lettuce lambs"]
}

const categories = document.querySelectorAll(".categories")
const categoriesLen = categories.length
const randomBtn = document.querySelector(".randomBtn")

function generateRandomMeal(){
    for (let i = 0; i < categoriesLen; i++ ){
        const category = categories[i]
        console.log(category)
        const className = category.classList[1]
        console.log(className)
        console.log(typeof className)
        const selections = itemSelections[className]
        console.log(selections)
        const selectionsLen = selections.length
        const randomIndex = Math.floor(Math.random() * selectionsLen)
        console.log(randomIndex)
        const randomItem = selections[randomIndex]
        console.log(randomItem)
        category.innerHTML = randomItem;
    }
}

randomBtn.addEventListener("click", generateRandomMeal)
