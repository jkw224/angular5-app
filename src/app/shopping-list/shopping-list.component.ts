import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.interface';
import { Ingredients } from '../shared/ingredients.mock';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

    ingredients = Ingredients;

    constructor() {
        console.log('ingredients: ' + this.ingredients);
    }

    ngOnInit() {
    }

}
