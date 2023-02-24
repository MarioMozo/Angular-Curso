import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',

})


export class MainComponent {
nuevo:Personaje={
  nombre: '',
  nivel: 0
}

  constructor( ){       //definir propiedad en constructor, se conoce como injección de dependencias, se esta injectando el service en este componente

  }
}
