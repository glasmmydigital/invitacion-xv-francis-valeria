import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
  private cuentaRegresiva: any;

  constructor(
      public traductorService: TraductorServicio,
    ) { }

  ngOnInit() {
    const fechaObjetivo = new Date('2026-06-13T13:00:00'); // Cambia esto por la fecha de tu evento

    const actualizarContador = () => {
        if (typeof document !== 'undefined') { // Verificación de entorno
            const ahora = new Date().getTime();
            const distancia = fechaObjetivo.getTime() - ahora;

            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

            // Actualizamos el contador visualmente
            document.getElementById('dias')!.innerText = dias.toString();
            document.getElementById('horas')!.innerText = horas.toString();
            document.getElementById('minutos')!.innerText = minutos.toString();
            document.getElementById('segundos')!.innerText = segundos.toString();

            // Cuando el tiempo se acabe, dejamos el contador en 0
            if (distancia < 0) {
                clearInterval(this.cuentaRegresiva);
                document.getElementById('dias')!.innerText = '0';
                document.getElementById('horas')!.innerText = '0';
                document.getElementById('minutos')!.innerText = '0';
                document.getElementById('segundos')!.innerText = '0';
            } else {
                setTimeout(actualizarContador, 1000);
            }
        }
    };

    actualizarContador();
  }

}
