import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { recipeComponent } from './recipe/recipe.component';
import { serverServices } from 'src/app/server.services';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterState, Router, RouterModule } from '@angular/router';
import { CookieService } from  'angular2-cookie/services/cookies.service';
import { AuthGuard } from 'src/app/auth-guard.service';

const appRootes: Routes =[
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: AccountComponent, canActivate: [AuthGuard]},
  {path:'home/:id', component: recipeComponent, canActivate: [AuthGuard]},
]
@NgModule({
  declarations: [
    AppComponent, recipeComponent, AccountComponent, HeaderComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRootes)
  ],
  providers: [serverServices, CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
