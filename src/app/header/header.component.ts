import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { serverServices } from 'src/app/server.services';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serverService: serverServices, private router: Router, private usercookie: CookieService) { }
  userid = '';
  ngOnInit() {
    this.userid = this.serverService.getCookie('userid');
    
  }
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature:string){
    console.log(feature);
    this.featureSelected.emit(feature);
  }

  onlogout(){
    this.usercookie.removeAll();
    this.router.navigate(['/login'])
  }
}
