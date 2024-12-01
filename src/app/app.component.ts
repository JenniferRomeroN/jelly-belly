import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomComponent } from './custom/custom.component'; 
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomComponent, NavbarComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jelly-belly';
}
