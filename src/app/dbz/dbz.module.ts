import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { dbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [            //Siempre en imports, van los module
    CommonModule,
    FormsModule
  ],
  exports:[             //Siempre en export van los componet
    MainComponent
  ],
  providers:[  //Es una unica instancia
    dbzService
  ]
})
export class DbzModule { }
