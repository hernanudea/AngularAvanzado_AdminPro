import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ingrementador',
  templateUrl: './ingrementador.component.html',
  styles: []
})
export class IngrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda!';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // NO se han creado los input

  }

  ngOnInit() {
    // SI se han creado los input

  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    
    this.cambioValor.emit(this.progreso);
  }

}
