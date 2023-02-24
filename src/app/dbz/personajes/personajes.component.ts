import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[]=[];

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService:dbzService){   //Se agrega la clase injectable del service para hacer uso de ella

  }


}
