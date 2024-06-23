import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../carousel/carousel.component';
import { Router, RouterLink } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,NgbCarouselModule, FormsModule,CarouselComponent,ContactUsComponent,RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  constructor(private router: Router) {} // Inject Router

  isMenuOpen: boolean = false;
  // router: any;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  contactUsButton(){
    // // debugger
    // alert('Contact-Us')
    this.router.navigateByUrl("contactUs");
  }
}
