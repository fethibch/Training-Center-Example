import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import {RouterModule, Routes} from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import {SignupService} from "./signup/signup.service";
import { LoginComponent } from './login/login.component';
import {AdminspaceComponent} from "./adminspace/adminspace.component";
import { ModifFormationComponent } from './adminspace/modif-formation/modif-formation.component';
import { ModifetudiantComponent } from './adminspace/modifetudiant/modifetudiant.component';


const appRoutes: Routes=[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'formation',component:FormationComponent} ,
  {path:'signup',component:SignupComponent} ,
  {path:'login',component:LoginComponent} ,
  {path:'adminspace',component:AdminspaceComponent} ,
  {path:'modifformation',component:ModifFormationComponent} ,
  {path:'modifetudiant',component:ModifetudiantComponent} ,

  { path:'home',component:HomeComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormationComponent,
    AdminspaceComponent,
      HomeComponent,
      SignupComponent,
      LoginComponent,
      ModifFormationComponent,
      ModifetudiantComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,NgbModule,RouterModule.forRoot(appRoutes),

  ],
  providers: [
SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
