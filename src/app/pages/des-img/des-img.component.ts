import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-des-img',
  standalone: true,
  imports: [],
  templateUrl: './des-img.component.html',
  styleUrl: './des-img.component.scss'
})
export class DesImgComponent implements AfterViewInit {

  currentIndexAlt: number = 0;

  constructor(
    public traductorService: TraductorServicio,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateView();

      setInterval(() => {
        this.shiftSlide(1);
      }, 3000);
    }
  }

  updateView(): void {
    const imageList = document.querySelectorAll('.gallery-track img') as NodeListOf<HTMLImageElement>;

    if (this.currentIndexAlt >= imageList.length) {
      this.currentIndexAlt = 0;
    }

    if (this.currentIndexAlt < 0) {
      this.currentIndexAlt = imageList.length - 1;
    }

    const track = document.querySelector('.gallery-track') as HTMLElement;
    track.style.transform = `translateX(-${this.currentIndexAlt * 100}%)`;
  }

  shiftSlide(direction: number): void {
    this.currentIndexAlt += direction;
    this.updateView();
  }
}