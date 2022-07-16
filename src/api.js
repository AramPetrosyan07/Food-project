import { API_URL } from "./Config";

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return response.json();
}

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return response.json();
}


const getMealById = async (id) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + id);
    return response.json();
}

export { getAllCategories, getFilteredCategory, getMealById };