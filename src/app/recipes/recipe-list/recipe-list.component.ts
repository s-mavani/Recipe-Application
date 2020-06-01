import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pav Bhaji', 'My favorite dish', 'https://holycowvegan.net/wp-content/uploads/2009/06/pav-bhaji-8.jpg'),
    new Recipe('Pav Bhaji', 'My favorite dish', 'https://holycowvegan.net/wp-content/uploads/2009/06/pav-bhaji-8.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
