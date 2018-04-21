import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

    @Input() recipes: Recipe[];
    @Output() selectedRecipe = new EventEmitter<Recipe>();

    constructor() { }

    ngOnInit() { }

    onRecipeClicked(recipe: Recipe) {
        this.selectedRecipe.emit(recipe);
    }

}
