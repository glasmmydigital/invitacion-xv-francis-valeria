import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-fech-img',
  standalone: true,
  imports: [],
  templateUrl: './fech-img.component.html',
  styleUrl: './fech-img.component.scss'
})
export class FechImgComponent implements OnInit, OnDestroy {

  currentIndex = 0;

  transitionEnabled = true;

  totalImages = 8;

  intervalId: any;

  constructor(
    public traductorService: TraductorServicio,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      this.intervalId = setInterval(() => {

        this.currentIndex++;

        if (this.currentIndex === this.totalImages) {

          setTimeout(() => {

            this.transitionEnabled = false;

            this.currentIndex = 0;

            setTimeout(() => {

              this.transitionEnabled = true;

            }, 50);

          }, 800);

        }

      }, 3000);

    }

  }

  ngOnDestroy(): void {

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

  }

}