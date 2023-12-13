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
  title='proyecto001'
  contador=0

  incrementar(){
    this.contador++
  }

  decrementar(){
    this.contador--
  }
 
}
