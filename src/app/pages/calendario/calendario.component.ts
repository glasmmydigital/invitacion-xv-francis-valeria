import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

export type DiaCelda = number | null;

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {

  /**
   * Aqui va la fecha de la boda formato: dd/mm/aaaa
   */
  fechaEntrada = '13/06/2026';

  constructor(public traductorService: TraductorServicio) {}

  get meses(): string[] {
    return Array.from({ length: 12 }, (_, i) =>
      this.traductorService.getTexto(`mes${i}`) ?? ''
    );
  }

  get diasSemana(): string[] {
    return Array.from({ length: 7 }, (_, i) =>
      this.traductorService.getTexto(`dia${i}`) ?? ''
    );
  }

  get tituloMesAnio(): string {
    const partes = this.obtenerPartesFecha();
    if (!partes) return '';
    return `${this.meses[partes.mes]} ${partes.anio}`;
  }

  get diaResaltado(): number {
    const partes = this.obtenerPartesFecha();
    return partes?.dia ?? 0;
  }

  obtenerPartesFecha(): { dia: number; mes: number; anio: number } | null {
    const partes = this.fechaEntrada.trim().split('/');
    if (partes.length !== 3) return null;
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const anio = parseInt(partes[2], 10);
    if (isNaN(dia) || isNaN(mes) || isNaN(anio) || mes < 0 || mes > 11) return null;
    return { dia, mes, anio };
  }

  get celdasMes(): DiaCelda[] {
    const partes = this.obtenerPartesFecha();
    if (!partes) return [];

    const { dia: _diaRef, mes, anio } = partes;
    const primerDia = new Date(anio, mes, 1);
    const diaSemanaInicio = primerDia.getDay();
    const totalDias = new Date(anio, mes + 1, 0).getDate();

    const celdas: DiaCelda[] = [];

    for (let i = 0; i < diaSemanaInicio; i++) {
      celdas.push(null);
    }

    for (let d = 1; d <= totalDias; d++) {
      celdas.push(d);
    }

    return celdas;
  }

  esDiaSeleccionado(valor: DiaCelda): boolean {
    return valor !== null && valor === this.diaResaltado;
  }
}
