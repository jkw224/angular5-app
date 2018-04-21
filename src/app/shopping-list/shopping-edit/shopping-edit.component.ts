import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Input } from '@angular/core';

import { Recipe } from '../../recipes/recipe.interface';
import { iIngredient } from '../../shared/ingredient.interface';
import { Ingredient } from '../../shared/ingredient.class';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

    @Input() recipe: Recipe;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    constructor() { }

    ngOnInit() { }

    onAddIngredient() {
        const ingredientName = this.nameInput.nativeElement.value;
        const ingredientAmount = this.amountInput.nativeElement.value;
        const newIngredient = new Ingredient(ingredientName, ingredientAmount);
        if (ingredientName && ingredientAmount) {
            this.ingredientAdded.emit(newIngredient);
            console.log('New Ingredient: ', newIngredient);
        }
    }

    onDeleteIngredient() {

    }

    onClearIngredient() {

    }

}
