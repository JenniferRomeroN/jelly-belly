import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomComponent } from './custom/custom.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta para Home
  { path: 'custom', component: CustomComponent }, // Ruta para Custom
];
