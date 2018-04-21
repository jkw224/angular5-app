import { Component, OnInit, Input } from '@angular/core';

import { iIngredient } from '../shared/ingredient.interface';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

    @Input() recipe;

    constructor() {
        // console.log('Shopping Recipe: ', this.recipe);
    }

    ngOnInit() {
    }

    onIngredientAdded(newIngredient: iIngredient ) {
        this.recipe.ingredients.push(newIngredient);
    }

}
