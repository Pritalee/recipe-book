import { Recipe} from './recipes.model'
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from '../../../node_modules/rxjs';

@Injectable()
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();
    //recipeSelected=new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Burger',
            'this is simply a test',
            'https://tse4.mm.bing.net/th?id=OIP.kSjvn3E_MmENnhzX15YKoQHaE8&pid=15.1&P=0&w=250&h=168',
             [
                 new Ingredient('Meat',1),
                 new Ingredient('Buns',2)
             ] ),
        new Recipe('Paneer chilly',
             'this is simply 1st recipe',
             'https://tse4.mm.bing.net/th?id=OIP.kSjvn3E_MmENnhzX15YKoQHaE8&pid=15.1&P=0&w=250&h=168',
             [
                 new Ingredient('paneer',2),
                 new Ingredient('capsicum',4)
             ] )
       
      ];
      constructor(private slService:ShoppingListService){}
      
      setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice())
      }
      
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
          return this.recipes[index]
      }

      IngredientsToShoppingList(ingredient:Ingredient[]){
          this.slService.addIngredients(ingredient);

      }
    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice())
    }
}