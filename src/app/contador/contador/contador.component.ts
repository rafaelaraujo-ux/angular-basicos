import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <h3>La base es: {{ base }}</h3>

    <button (click)="acumulador(base)">{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumulador(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 0;
  base: number = 5;

  acumulador(valor: number) {
    return (this.numero += valor);
  }
}
