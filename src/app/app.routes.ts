import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomComponent } from './custom/custom.component';

export const routes: Routes = [
  // Ruta para Home
  { path: 'home', component: HomeComponent }, 
  // Ruta para Custom
  { path: 'custom', component: CustomComponent }, 
];
