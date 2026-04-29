import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';
import { isPlatformBrowser } from '@angular/common';
import { ContadorComponent } from '../contador/contador.component';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [ContadorComponent],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent {

  slideIndex: number = 0;

  constructor(
      public traductorService: TraductorServicio,
      @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit() {
    this.traductorService.lenguaje = "ES";
  }

  ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        // Llamar a la función para iniciar el carrusel después de que la vista se haya inicializado
        this.showSlides();
        setInterval(() => {
          this.moveSlide(1);  // Mueve el carrusel cada 3 segundos
        }, 3000);  // Intervalo de 3 segundos
      }
    }

    showSlides(): void {
      const slides = document.querySelectorAll('.carouselImg img') as NodeListOf<HTMLImageElement>;
      if (this.slideIndex >= slides.length) {
        this.slideIndex = 0;
      }
      if (this.slideIndex < 0) {
        this.slideIndex = slides.length - 1;
      }

      // Mueve el carrusel a la posición correcta
      const carousel = document.querySelector('.carouselImg') as HTMLElement;
      carousel.style.transform = `translateX(-${this.slideIndex * 100}%)`;
    }

    moveSlide(step: number): void {
      this.slideIndex += step;
      this.showSlides();
    }

  cambiarIdioma(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.traductorService.lenguaje = isChecked ? 'EN' : 'ES';
  }

}
