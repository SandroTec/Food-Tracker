import type { FoodItem } from "./types/food";
import type { Nutrition } from "./types/nutrition";


const imageInput = document.querySelector<HTMLInputElement>(
    "#food-image"
);

const previewImage = document.querySelector<HTMLImageElement>(
    "#preview-image"
);

imageInput?.addEventListener("change", () => {
    const file = imageInput.files?.[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        if(previewImage) {
            previewImage.src = reader.result as string;
        }
    };
    reader.readAsDataURL(file);
});

const mockFoods: FoodItem[] = [
    {
        id: 1,
        name: "Ei",
        amount: 2,
        unit: "Stück",
        nutrition: {
            calories: 156,
            protein: 13,
            carbs: 1,
            fat: 11
        }
    },
    {
        id: 2,
        name: "Haferflocken",
        amount: 100,
        unit: "g",
        nutrition: {
            calories: 372,
            protein: 13,
            carbs: 59,
            fat: 7
        }
    },
    {
        id: 3,
        name: "Hähnchenbrust",
        amount: 200,
        unit: "g",
        nutrition: {
            calories: 330,
            protein: 62,
            carbs: 0,
            fat: 7
        }
    }
];

const foodDisplay = document.querySelector(".food-displaying-container");

function renderFoods(foodArray:FoodItem[]) {
    foodArray.forEach(foodItem => {
        if(!foodDisplay) return;
        foodDisplay.innerHTML += createFoodCard(foodItem);
    });
}

function createFoodCard(foodItem: FoodItem) {
    return `
        <div class="food-card" data-food-id="${foodItem.id}">
            <p> name: <input data-field="name" value="${foodItem.name}"> </p>
            <ul>
                <li>amount:<input data-field="amount" value="${foodItem.amount}"></li>
                <li>unit: <input data-field="unit" value="${foodItem.unit}"></li>
                <li> nutrition:</li>
                <ul>
                    <li>calories: <p data-field="calories">${foodItem.nutrition.calories}</p></li>
                    <li>protein: <p data-field="protein">${foodItem.nutrition.protein}</p></li>
                    <li>carbs: <p data-field="carbs">${foodItem.nutrition.carbs}</p></li>
                    <li>fat: <p data-field="fat">${foodItem.nutrition.fat}</p></li>
                </ul>
                
            </ul>
        </div>
    `
}

renderFoods(mockFoods);