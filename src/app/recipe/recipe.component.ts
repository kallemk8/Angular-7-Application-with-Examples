import { Component, Input, SimpleChange, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html'
})

export class recipeComponent implements OnInit{
    @Input() element : {name: string, content: string, phoneno: number};
    constructor(private route: ActivatedRoute){}
    
    ngOnChanges(changes: SimpleChange){
        console.log(changes);
    }
    ngOnInit(){
        console.log(this.route.snapshot.params['id']);
    }
    addElement(element: any[]){
        console.log(element);

    }
}