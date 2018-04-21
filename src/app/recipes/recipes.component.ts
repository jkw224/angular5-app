import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.interface';

@Component({
    selector: 'app-recipes',
    templateUrl: 'recipes.component.html',
    styleUrls: ['recipes.component.scss']
})
export class RecipesComponent {

    @Output() emitRecipe = new EventEmitter<Recipe>();
    recipe: Recipe;

    constructor() { }

    assignRecipe(recipe: Recipe) {
        this.recipe = recipe;
        this.emitRecipe.emit(recipe);
        // console.log('Recipes recipe', recipe);
    }
}
