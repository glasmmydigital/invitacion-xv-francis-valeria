import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortadaComponent } from './pages/portada/portada.component';
import { NomPadresComponent } from './pages/nom-padres/nom-padres.component';
import { FechImgComponent } from "./pages/fech-img/fech-img.component";
import { CermRecepComponent } from "./pages/cerm-recep/cerm-recep.component";
import { TimelineComponent } from './pages/timeline/timeline.component';
import { DreesCodeComponent } from './pages/drees-code/drees-code.component';
import { MomentosComponent } from './pages/momentos/momentos.component';
import { RegalosComponent } from './pages/regalos/regalos.component';
import { KidsComponent } from './pages/kids/kids.component';
import { PasesComponent } from './pages/pases/pases.component';
import { ConfirAsistenComponent } from './pages/confir-asisten/confir-asisten.component';
import { DesImgComponent } from './pages/des-img/des-img.component';
import { GlasmmyComponent } from './pages/glasmmy/glasmmy.component';
import { GuarFechComponent } from './pages/guar-fech/guar-fech.component';
import { ImgFloresComponent } from './pages/img-flores/img-flores.component';
import { SegImgFloresComponent } from './pages/seg-img-flores/seg-img-flores.component';
import { ConfirmacionCuadradoComponent } from './pages/forms-confirmacion/confirmacion-cuadrado/confirmacion-cuadrado.component';
import { CarruselComponent } from './pages/carrusel/carrusel.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ContadorComponent } from './pages/contador/contador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PortadaComponent,
    CalendarioComponent,
    ContadorComponent,
    ImgFloresComponent,
    //NomPadresComponent,
    FechImgComponent,
    GuarFechComponent,
    CermRecepComponent,
    CarruselComponent,
    TimelineComponent,
    DreesCodeComponent,
    MomentosComponent,
    SegImgFloresComponent,
    RegalosComponent,
    //CarruselComponent,
    KidsComponent,
    PasesComponent,
    ConfirAsistenComponent,
    DesImgComponent,
    GlasmmyComponent,
    ConfirmacionCuadradoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plantilla-angular-wedding';
}
