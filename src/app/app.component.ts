import { Component, Input} from '@angular/core';
import { Response } from '@angular/http';
import { serverServices } from 'src/app/server.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  servers = [
    {
      name: "srikanth",
      content: "sample test",
      phoneno: 9618337169 22
    },
    {
      name: "srikanth 2",
      content: "sample test 2",
      phoneno: 96183371691
    }
  ]
  serviceData = [];
  constructor(private serverService: serverServices){}

  loadedFeature = 'recipe';
  onNavigate(feature:string){
    this.loadedFeature= feature;
  }
} 
