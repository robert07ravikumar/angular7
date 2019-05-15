import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('a test recipe 1', 'a test desc 1', 'https://images.app.goo.gl/CFzwcWRzUWKvBQNG6'),
    new Recipe('a test recipe 2', 'a test desc 2', 'https://images.app.goo.gl/CFzwcWRzUWKvBQNG6')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
