import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, Utilisateur } from '../model';
import { UtilisateurService } from './utilisateur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

user: User = new User();


  
constructor(private utilisateurService : UtilisateurService, private road: Router ) { 
    
  }

  authentification(){
  this.utilisateurService.auth(this.user);

  }
  }
  /*
 auth(): void{
   
  
   this.http.post<Utilisateur>("http://localhost:8888/utilisateur/auth", this.user ).subscribe(resp =>{

   if(resp.roles== "STAGIAIRE"){
    console.log("stagiaire")
    
   }
   if (resp.roles=="FORMATEUR"){
    console.log("formateur")
    console.log(resp.personne.id);
    
    this.road.navigate(['/ordinateur/'+resp.personne.id]);
   }
   });
    

   // if et si on recuperee une erreur :> reste a l'accueil
   // if stagiaire : mettre les données de resp dans un stagiaire
   // if formateur : mettre les données de resp dans un formateur 
    
    
  }*/

