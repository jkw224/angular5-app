export abstract class RecipeList {
    recipes = [
        {
            peruvianSalad : {
                info: {
                    title: 'Peruvian Salad',
                    dateAdded: '4/15/18',
                    description: 'Delicious chopped Romain Lettuce with Lime, Onions, Tomatoes, and Cilantro',
                    imagePath: 'https://c.pxhere.com/photos/2a/22/vegetables_colander_chopped_washing_kitchen_cooking-1261365.jpg!d',
                },
                ingredients: [
                    {
                        ingredient: 'Romain Lettuce',
                        amount: 1
                    }, {
                        ingredient: 'Onion',
                        amount: 1
                    }, {
                        ingredient: 'Tomato',
                        amount: 1
                    }, {
                        ingredient: 'Avocado',
                        amount: 1
                    }, {
                        ingredient: 'Lime',
                        amount: 1
                    }
                ]
            }
        }, {
            bbqRibs: {
                info: {
                    title: 'Baby Back Ribs',
                    dateAdded: '4/15/18',
                    description: 'Seared ribs smothered in BBQ cooked on a grill.',
                    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Baby-back_ribs.jpg'
                },
                ingredients: [{
                        ingredient: 'Slab of ribs',
                        amount: 1
                    }, {
                        ingredient: 'Southern BBQ Sauce',
                        amount: 1,
                    }
                ]
            }
        }, {
            Ceviche: {
                info: {
                    title: 'Ceviche',
                    dateAdded: '4/15/18',
                    description: 'Chopped Talapia citrically cooked with limes, mixed with sliced onions and cilantro.',
                    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Ceviche_de_Reineta_%28Brama_australis%29.jpg'
                },
                ingredients: [
                    {
                        ingredient: 'Talapia',
                        amount: 5
                    }, {
                        ingredient: 'Onion',
                        amount: 1
                    }, {
                        ingredient: 'Tomato',
                        amount: 1
                    }, {
                        ingredient: 'Lime',
                        amount: 1
                    }
                ]
            }
        }, {
            FuneralPotatoes: {
                info: {
                    title: 'Funeral Potatoes',
                    dateAdded: '4/15/18',
                    description: 'Chopped potatoes with creamy cheese and corn flakes.',
                    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Funeralpotatoesdish.JPG',
                },
                ingredients: [
                    {
                        ingredient: 'Frozen Chopped Potato',
                        amount: 1,
                    }, {
                        ingredient: 'Butter',
                        amount: 1,
                    }, {
                        ingredient: 'Cream Cheese',
                        amount: 1,
                    }, {
                        ingredient: 'Tillamook Cheese',
                        amount: 1,
                    }, {
                        ingredient: 'Corn Flakes',
                        amount: 1,
                    }
                ]
            }
        }, {
            FrenchToast: {
                info: {
                    title: 'French Toast',
                    dateAdded: '4/7/18',
                    description: 'Cinnamon, eggs, milk, and a touch of vanilla. The perfect french toast.',
                    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Mmm..._cinnamon_toast_%284197664913%29.jpg'
                },
                ingredients: [
                    {
                        ingredient: 'French Bread',
                        amount: 1,
                    }, {
                        ingredient: 'Egg',
                        amount: 5,
                    }, {
                        ingredient: 'Milk',
                        amount: 1,
                    }, {
                        ingredient: 'Cinnamon',
                        amount: 1,
                    },
                ]
            }
        }
    ];
}
