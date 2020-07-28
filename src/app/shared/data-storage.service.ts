import { Http, Response } from "../../../node_modules/@angular/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipes.model";


@Injectable()
export class DataStorageService{
    constructor(private http:Http, private recipeservice:RecipeService){}


    storeRecipes(){
        return this.http.put('https://ng-recipe-book-8f1ad.firebaseio.com/recipes.json',this.recipeservice.getRecipes());
    }

    getRecipes(){
        this.http.get('https://ng-recipe-book-8f1ad.firebaseio.com/recipes.json')
   /*     .map(
            (response:Response)=>{
                const recipes:Recipe[]=response.json();
                for (let recipe of recipes){
                    if(!recipe['ingredients']){
                        console.log(recipe);
                        recipe['ingredients']=[];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes:Recipe[])=>{
                this.recipeservice.setRecipes(recipes);
            }

        );*/
    }
}
