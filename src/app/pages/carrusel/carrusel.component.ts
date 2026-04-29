import { Component, AfterViewInit, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent implements OnInit, OnDestroy {
  private currentIndex = 0;
  private autoSlideInterval: any;
  private imageElement!: HTMLImageElement;
  private imagePaths: string[] = [
    'assets/Himg00.png',
    'assets/Himg01.jpg',
    'assets/Himg02.jpg',
    'assets/Himg03.jpg',
    'assets/Himg04.jpg'
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public traductorService: TraductorServicio
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.imageElement = document.getElementById(
        'hotelImage'
      ) as HTMLImageElement;
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.stopAutoSlide();
    }
  }

  private nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
    if (this.imageElement) {
      this.imageElement.src = this.imagePaths[this.currentIndex];
    }
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => this.nextImage(), 6000);
  }

  private stopAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
  }
}
