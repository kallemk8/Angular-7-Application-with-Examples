import { Component, OnInit } from '@angular/core';
import { serverServices } from 'src/app/server.services';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  key = "userid";
  message ="";
  constructor(private serverService: serverServices, private router: Router, private route: ActivatedRoute, private usercookie: CookieService) { }
  @ViewChild('f') loginform: NgForm;
  ngOnInit() {
    var userid = this.serverService.getCookie('userid');
    if(userid){
      this.router.navigate(['/home']);
    }
  }
  onSubmit(){
    console.log(this.loginform.value);
    this.serverService.getLoginservice(JSON.stringify(this.loginform.value))
    .subscribe(
      (response: Response) =>{
        const data = response.json();  
        //console.log(data);
        if(data.status=='success'){
          console.log("dsfdsfdsf");
          this.router.navigate(['/home']);
          this.usercookie.put('userid', data.data.username);
        }
      },(error: Response) => {
        const data = error.json();  
        console.log(data);
      }
    );
  }
}
