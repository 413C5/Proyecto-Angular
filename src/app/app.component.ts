import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //Propiedades
  nombre = 'Alejandro Zarate'
  edad = 40
  email = 'zarate@gmail.com'
  sueldos = [1700, 1600, 1900]
  activo = true
  sitio='https://www.google.com'

  //Define si un empleado es activo o no
  esActivo() {
    if (this.activo)
      return 'Trabajador activo'
    else
      return 'Trabajador inactivo'
  }

  //Devuleve la suma de los 3 ultimos sueldos
  ultimos3Sueldos() {
    let suma = 0
    this.sueldos.forEach(i => {
      suma += i;
    })
    return suma
  }

  title = 'proyecto001'
}
