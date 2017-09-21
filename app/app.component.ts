import { Component } from '@angular/core';

@Component({
  selector : 'app-root',
  template: `
  <div class= "container">
    <h1>Recipe Box {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
      <div *ngFor = "let currentRecipe of recipes">
      <h4 (click) = "showRecipe(currentRecipe)">{{currentRecipe.title}}</h4>
     </div>

     <div *ngIf = "selectedRecipe">
       <h5> Ingredients: </h5>
         <li *ngFor = "let ingredient of selectedRecipe.ingredients">{{ingredient}}</li>
       <h5> Directions: </h5>
         <li *ngFor = "let direction of selectedRecipe.directions">{{direction}}</li>
     </div>
  `
})

export class AppComponent {
  currentFocus: String = 'Angular Recipe';
    currentTime = new Date();
    month: number = this.currentTime.getMonth() + 1;
    day: number = this.currentTime.getDate();
    year: number = this.currentTime.getFullYear();

    recipes: Recipe[] = [
      new Recipe('Chocolate Chip Cookies',
      ['granulated sugar', 'salt','brown sugar','nuts' , 'baking soda', 'all-purpose flour'],
      ['1. Heat Oven', '2. Mix all ingredients' , '3. Drop a dough' , '4. Bake 8-10 minutes']),
      new Recipe('Vanilla Cup Cake',
      ['sugar', 'salt','eggs','milk' , 'baking soda', 'all-purpose flour' , 'vegetable oil'],
      ['1. Heat Oven', '2. Mix all ingredients' , '3. Drop a dough' , '4. Bake 5-8 minutes']),
      new Recipe(
        'Crispy chicken',
        ['chicken', 'garlic salt','corn flour','paprika' , 'baking soda', 'all-purpose flour'],
        ['1. Heat oil in a pan', '2. Mix all ingredients' , '3. Drop a chicken' , '4. Fry it in a pan']
      )
    ];

    selectedRecipe: Recipe = null;
    showRecipe(clickedRecipe){
      this.selectedRecipe = clickedRecipe;
    }
}

export class Recipe{

  constructor(public title: String, public ingredients: String[] , public directions: String[]){}

}
