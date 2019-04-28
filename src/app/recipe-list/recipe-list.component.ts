import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'a test desc', 'https://images.app.goo.gl/CFzwcWRzUWKvBQNG6')
  ];
  constructor() { }

  ngOnInit() {
  }

}
