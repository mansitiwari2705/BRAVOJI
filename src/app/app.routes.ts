import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path:'',
     component: MainPageComponent
    },
    {
      path:'contactUs',
      component:ContactUsComponent
    }
    // {path:'contat-us',component:ContactUsComponent},
    // { path: '**', redirectTo: '' } 
    // path: 'services',component:
     
  ];
  
