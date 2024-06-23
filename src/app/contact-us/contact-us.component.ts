import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor(private router: Router) {} // Inject Router
  onSubmit() {
    alert('Form Submitted!');
  }
}

