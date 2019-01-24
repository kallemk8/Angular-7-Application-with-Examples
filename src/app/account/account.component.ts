import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { serverServices } from 'src/app/server.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  serviceData = [];
  constructor(private serverService: serverServices, private router: Router, private route: ActivatedRoute,private usercookie: CookieService){}
  userid= '';
  data ='';
  ngOnInit() {
   
    this.serverService.getServerdata().subscribe((response => this.serviceData = response.json()), (error)=>console.log(error))
    this.serverService.getLatestnews().subscribe(
      (response: Response)=> {
        const data = response.json(); 
        console.log(data[0].news);
        this.data = data[0].news;
      }
    );
  }
  
  
} 
