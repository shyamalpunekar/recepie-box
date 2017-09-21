import { Component } from '@angular/core';

@Component({
  selector : 'app-root',
  template: `

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
        'Chocolate Chip Cookies',
        ['chicken', 'garlic salt','corn flour','paprika' , 'baking soda', 'all-purpose flour'],
        ['1. Heat oil in a pan', '2. Mix all ingredients' , '3. Drop a chicken' , '4. Fry it in a pan']
      )
    ];

}


export class Recipe{

  constructor(public title: String, public ingredients: String[] , public directions: String[]){}

}











// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   template: `
//   <div class= "container">
//   <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
//   <h3>{{currentFocus}}</h3>
//   <ul>
//     <li *ngFor = "let currentTask of tasks">{{currentTask.description}}</li>
//   </ul>
//   </div>
//   `
// })
//
// export class AppComponent {
//   currentFocus: String = 'Angular Homework';
//   currentTime = new Date();
//   month: number = this.currentTime.getMonth() + 1;
//   day: number = this.currentTime.getDate();
//   year: number = this.currentTime.getFullYear();
//   //firstTask: Task = new Task("Finish weekend Angular homework for Epicodus course");
//   tasks: Task[] = [
//     new Task('Finish weekend Angular homework for Epicodus course'),
//     new Task('Begin brainstorming possible JavaScript group projects'),
//     new Task('Add README file to last few Angular repos on GitHub')
//   ];
// }
//
//   export class Task{
//     public done: boolean = false;
//
//     constructor(public description: String){}
//
//   }
