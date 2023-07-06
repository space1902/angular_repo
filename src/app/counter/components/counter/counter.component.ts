import { Component } from '@angular/core';

@Component({
  selector: 'app-counter'
  ,template: `Esto es un contador: {{ title }}

<h1>EL contador es: <strong>{{ numero }}</strong></h1>

<hr>
<button class="btn btn-primary mx-2" (click)="acumular(1)">aumentar</button>
<button class="btn btn-primary mx-2" (click)="acumular(-1)">disminuir</button>
<button class="btn btn-primary" (click)="reiniciar()">reiniciar</button>`
})

export class AppCounter {

  title: string = 'Contador App';
  numero: number = 10;
  //base: number = 5;

  acumular( valor: number ) {
    this.numero += valor;
  }
  reiniciar() {
    this.numero = 0
  }
}
