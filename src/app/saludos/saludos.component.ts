import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { delay } from 'rxjs';

@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.component.html',
  styleUrls: ['./saludos.component.css'],
  animations: [
    trigger('mensaje', [
      state('void', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('void => visible', animate('1s ease-in-out')),
      transition('visible => void', animate('1s ease-in-out')),
    ]),
  ],
})
export class SaludosComponent implements OnInit {
  mensajes: string[] = [
    'Buenos días, mi niña.',
    'Solo quería recordarte que',
    'tú eres especial para mí,',
    'y desearte que este día',
    'sea mucho mejor que ayer.',
    'Que cada momento del día',
    'te deje un aprendizaje',
    'y que sea un día perfecto.',
    'Te quiero mucho.',
    '- Victor'
  ];

  mensajeActual: string = '';
  estadoActual: string = 'visible';

  ngOnInit() {
    this.mostrarSiguienteMensaje();
  }

  mostrarSiguienteMensaje() {
    if (this.mensajes.length > 0) {
      this.mensajeActual = this.mensajes.shift()!;
      setTimeout(() => {
        this.estadoActual = 'void';
      }, 2000);

      setTimeout(() => {
        this.mostrarSiguienteMensaje();
      }, 3000);

      this,this.estadoActual = 'visible';
    }
  }
}