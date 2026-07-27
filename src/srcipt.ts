import type { FoodItem } from "./types/food";

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

