import { Ingredient } from '../shared/ingredient.class';

export interface Recipe {
    title: String;
    dateAdded: String;
    description: String;
    imagePath: String;
    ingredients: Ingredient[];
}
