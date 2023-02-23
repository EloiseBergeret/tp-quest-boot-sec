import { Component } from '@angular/core';
import { AccueilFormateurService } from './accueil-formateur.service';
import { Formateur } from '../model';

@Component({
  selector: 'app-accueilformateur',
  templateUrl: './accueilformateur.component.html',
  styleUrls: ['./accueilformateur.component.scss']
})
export class AccueilformateurComponent {

  formateur : Formateur = new Formateur();
  constructor(private aFServ: AccueilFormateurService){}

  findById(id: number){
    this.formateur= aFServ.findById(id);
  }

}
