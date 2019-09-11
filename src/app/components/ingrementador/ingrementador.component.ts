import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-ingrementador',
  templateUrl: './ingrementador.component.html',
  styles: []
})
export class IngrementadorComponent implements OnInit {

  @ViewChild('txtProgress', { static: false }) txtProgres: ElementRef // maneja elementos del DOM
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
    this.txtProgres.nativeElement.focus();

  }

  onChanges(newValue: number) {

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue
    }
    this.txtProgres.nativeElement = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

}
