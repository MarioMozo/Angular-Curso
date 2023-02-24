import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class dbzService{

//Estructura
//1-Propiedades
//2- Getters & Setters
//3- Constructor
//4- Metodos

  private _personajes: Personaje[]=[
  {
    nombre: ' ',
    nivel: 0
  }
];
//Los objetos se mandan por referencia
get personajes():Personaje[] {
  return [...this._personajes];
}



  constructor(){

  }
  agregarPersonaje(data:Personaje){
    this._personajes.push( data );
  }



}
