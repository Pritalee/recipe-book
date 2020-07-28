import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature='recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDipjPbqgej0YTjmvy59IZufSXu_e0dERk",
      authDomain: "ng-recipe-book-8f1ad.firebaseapp.com",
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
    
  }
}
