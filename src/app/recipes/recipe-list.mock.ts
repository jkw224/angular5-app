import { Ingredient } from '../shared/ingredient.class';

export const foodCategory = {
    vegetable: 'vegetable',
    fruit: 'fruit',
    meat: 'meat',
    grain: 'grain',
    dairy: 'dairy',
    condiment: 'condiment',
};

export const RecipeList = {
    recipes: [
        {
            title: 'Peruvian Salad',
            dateAdded: '4/15/18',
            description: 'Delicious chopped Romain Lettuce with Lime, Onions, Tomatoes, and Cilantro',
            imagePath: 'https://c.pxhere.com/photos/2a/22/vegetables_colander_chopped_washing_kitchen_cooking-1261365.jpg!d',
            ingredients: [
                // new Ingredient('Romain Lettuce', 1, foodCategory.vegetable, 'Peruvian Salad'),
                {
                    name: 'Romain Lettuce',
                    amount: 1,
                    type: foodCategory.vegetable,
                    recipe: 'Peruvian Salad',
                }, {
                    name: 'Onion',
                    amount: 1,
                    type: foodCategory.vegetable,
                    recipe: 'Peruvian Salad',
                }, {
                    name: 'Tomato',
                    amount: 1,
                    type: foodCategory.vegetable,
                    recipe: 'Peruvian Salad',
                }, {
                    name: 'Avocado',
                    amount: 1,
                    type: foodCategory.vegetable,
                    recipe: 'Peruvian Salad',
                }, {
                    name: 'Lime',
                    amount: 1,
                    type: foodCategory.fruit,
                    recipe: 'Peruvian Salad',
                }
            ]
        }, {
            title: 'Baby Back Ribs',
            dateAdded: '4/15/18',
            description: 'Seared ribs smothered in BBQ cooked on a grill.',
            imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Baby-back_ribs.jpg',
            ingredients: [
                {
                    name: 'Slab of ribs',
                    amount: 1,
                    type: foodCategory.meat,
                    recipe: 'BBQ Ribs',
                }, {
                    name: 'Southern BBQ Sauce',
                    amount: 1,
                    type: foodCategory.condiment,
                    recipe: 'BBQ Ribs',
                }
            ]
        }, {
            title: 'Ceviche',
            dateAdded: '4/15/18',
            description: 'Chopped Talapia citrically cooked with limes, mixed with sliced onions and cilantro.',
            imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Ceviche_de_Reineta_%28Brama_australis%29.jpg',
            ingredients: [
                {
                    name: 'Talapia',
                    amount: 3,
                    type: foodCategory.meat,
                    recipe: 'Ceviche'
                }, {
                    name: 'Onion',
                    amount: 1,
                    type: foodCategory.vegetable,
                    recipe: 'Ceviche'
                }, {
                    name: 'Tomato',
                    amount: 1,
                    type: foodCategory.vegetable,
                    recipe: 'Ceviche'
                }, {
                    name: 'Lime',
                    amount: 1,
                    type: foodCategory.fruit,
                    recipe: 'Ceviche'
                }
            ]
        }, {
            title: 'Funeral Potatoes',
            dateAdded: '4/15/18',
            description: 'Chopped potatoes with creamy cheese and corn flakes.',
            imagePath: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Funeralpotatoesdish.JPG',
            ingredients: [
                {
                    name: 'Frozen Chopped Potatos',
                    amount: 1,
                    type: foodCategory.vegetable,
                    recipe: 'Funeral Potatoes'
                }, {
                    name: 'Butter',
                    amount: 1,
                    type: foodCategory.dairy,
                    recipe: 'Funeral Potatoes'
                }, {
                    name: 'Cream Cheese',
                    amount: 1,
                    type: foodCategory.dairy,
                    recipe: 'Funeral Potatoes'
                }, {
                    name: 'Tillamook Cheese',
                    amount: 1,
                    type: foodCategory.dairy,
                    recipe: 'Funeral Potatoes'
                }, {
                    name: 'Corn Flakes',
                    amount: 1,
                    type: foodCategory.grain,
                    recipe: 'Funeral Potatoes'
                }
            ]
        }, {
            title: 'French Toast',
            dateAdded: '4/7/18',
            description: 'Cinnamon, eggs, milk, and a touch of vanilla. The perfect french toast.',
            imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Mmm..._cinnamon_toast_%284197664913%29.jpg',
            ingredients: [
                {
                    name: 'French Bread',
                    amount: 1,
                    type: foodCategory.grain,
                    recipe: 'French Toast',
                }, {
                    name: 'Egg',
                    amount: 5,
                    type: foodCategory.dairy,
                    recipe: 'French Toast',
                }, {
                    name: 'Milk',
                    amount: 1,
                    type: foodCategory.dairy,
                    recipe: 'French Toast',
                }, {
                    name: 'Cinnamon',
                    amount: 1,
                    type: foodCategory.condiment,
                    recipe: 'French Toast',
                },
            ]
        }
    ],
};
