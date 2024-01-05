import { Component, Input } from '@angular/core';

@Component({
  selector: 'Dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})

export class DadoComponent {
  @Input() valor: number = 1
}
