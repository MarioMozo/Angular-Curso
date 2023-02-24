import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {



  @Input() nuevo: Personaje = {
    nombre: '',
    nivel: 0,
  }

  //Se tiene que mandar a llamar del service la propiedad personajes, donde se guardaran los que se agreguen
  constructor( private dbzService: dbzService){

  }
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();  // Esto va a emitir un evento  del tipo  personaje (definido en la interfaz)
  agregar() {

    if (this.nuevo.nombre.trim().length === 0) { return; }   //Esta condicion dice que si el personaje nuevo nombre tiene espacios vacios que son igual a cero entonces no hace nada
    console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);   //Aquí esta la función que emite el output()
    this.dbzService.agregarPersonaje(this.nuevo);


    this.nuevo = {            // Aquí limpia los datos, ya que nuevo regresa un string vacio y nivel un cero.
      nombre: ' ',
      nivel: 0,
    }



  }

}
