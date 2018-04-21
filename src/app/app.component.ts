import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from './recipes/recipe.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    recipe: Recipe;

    recipeSelected(recipe: Recipe) {
        this.recipe = recipe;
    }
}
