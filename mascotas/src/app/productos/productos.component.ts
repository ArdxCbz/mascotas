import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    { nombre: 'Peras', precio: 10 },
    { nombre: 'Sandias', precio: 20 },
    { nombre: 'Naranjas', precio: 30 }
  ];
}