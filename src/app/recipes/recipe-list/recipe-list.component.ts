import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Recipe } from '../recipe.interface';
import { Recipes } from '../recipes.mock';
// import { RecipeList } from '../../shared/recipe-list.mock';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, AfterViewInit {
    // recipeList: any = RecipeList;
    recipes: Recipe[] = Recipes.data;

    constructor() { }

    ngOnInit() {

    }

    ngAfterViewInit() {
        console.log(this.recipes);
    }

}
