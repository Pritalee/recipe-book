import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];
  subscription:Subscription;
  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute
            ) { }

  ngOnInit() {
    this.subscription=this.recipeService.recipesChanged
    .subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      });
      
  this.recipes=this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);


  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
