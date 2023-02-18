import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heore/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";


                        //Estructura de ngModule costa de dos partes "declarations"
@NgModule({             //Aquí se declaran los Componentes dentro del modulo, aquí estará todo visible dentro de este directorio
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  exports:[             //Aquí se exportan para poder ser usado fuera de este directorio
    ListadoComponent
  ],
  imports: [            //Aquí van los modulos
    CommonModule

  ]

})
export class Heroesmodule{

}
