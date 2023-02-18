import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  constructor(){
    console.log("Constructor iniciado");

  }

    ngOnInit():void{
      console.log("Iniciando componente");

    }

    heroes:string[]=['Spider-Man','Tor','Iron-Man','Capitan America'];
    heroeBorrado:string='';

    borrarHeroes(){

      this.heroeBorrado = this.heroes.shift() || '';
      console.log(this.heroeBorrado);

    }


}
