import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User, Utilisateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateur : Utilisateur = new Utilisateur;

    constructor(private http: HttpClient, private road: Router) {
      
     }


  auth(user:User)  {

    this.http.post<Utilisateur>("http://localhost:8888/utilisateur/auth", user ).subscribe(resp=>{
    
    this.utilisateur=resp;

    if(resp.roles== "STAGIAIRE"){
      console.log("stagiaire")
      
     }
     if (resp.roles=="FORMATEUR"){
      console.log("formateur")
      console.log(resp.personne.id);
      
      this.road.navigate(['/ordinateur/'+resp.personne.id]);
     }
    
    });
    
  
  }



}
