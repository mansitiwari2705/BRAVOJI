import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterOutlet,Router } from '@angular/router';
// import { AppRoutingModule } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainPageComponent,CarouselComponent,ContactUsComponent,],
  // template: '<router-outlet></router-outlet>',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bravoji';
  constructor(private router:Router){}
}
