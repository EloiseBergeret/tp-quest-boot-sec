import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filiere, Formateur, Matiere } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilFormateurService {

  formateur: Formateur = new Formateur();
  filieres: Array<Filiere> = null;
  matieres: Array<Matiere> = null;

  constructor(private http: HttpClient, private id: number) {
    this.loadFo(this.id);
    this.loadFi(this.id);
    this.loadMa(this.id);
  }

  findById() {
    return this.formateur;
  }

  loadFo(id: number): Formateur {
    return this.http.get<Formateur>("http://localhost:8888/accueilformateur/" + id).subscribe(resp => {
      this.formateur = resp;})
  }

  loadFi(id: number): Array<Filiere>{
    return this.http.get<Array<Filiere>>("http://localhost:8888/accueilformateur/fi/"+id).subscribe(resp => {this.filieres= resp});
  }

  loadMa(id: number): Array<Matiere>{
    return this.http.get<Array<Matiere>>("http://localhost:8888/accueilformateur/ma/"+id).subscribe(resp => {this.matieres= resp});
  }
}