import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomComponent } from './custom/custom.component';
// import { ContactComponent } from './contact/contact.component'

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'custom', component: CustomComponent },
    // { path: 'contact', component: ContactComponent}
];