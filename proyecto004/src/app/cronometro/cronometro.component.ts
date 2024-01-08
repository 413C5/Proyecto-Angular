import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Cronometro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})

export class CronometroComponent {

  segundo: number = 0
  @Input() inicio: number = 0

  //Syntax to define event
  @Output() multiplo10 = new EventEmitter<number>()

  ngOnInit() {
    this.segundo = this.inicio
    
    //Every second a second is added and cheks if 10 secs have passed
    setInterval(() => {
      this.segundo++
      if (this.segundo % 10 === 0)
        this.multiplo10.emit(this.segundo)
    }, 1000)
  }

}
