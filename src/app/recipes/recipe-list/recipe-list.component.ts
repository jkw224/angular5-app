import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.interface';
import { RecipeList } from '../recipe-list.mock';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = RecipeList.recipes;

    constructor() { }

    ngOnInit() { }

    onRecipeRecieved(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
