import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  beans: { name: string; imgSrc: string; description: string }[] = [];

  constructor(private http: HttpClient) {
    this.getAllBeans();
  }

  getAllBeans() {
    this.http.get("https://jellybellywikiapi.onrender.com/api/Beans").subscribe(
      (result: any) => {
        const beansData = result.items;
        if (Array.isArray(beansData)) {
          this.beans = beansData.map((bean: any) => ({
            name: bean.flavorName,
            imgSrc: bean.imageUrl,
            description: bean.description || "No description available", 
          }));
        } else {
          console.error("No se encontraron beans en la propiedad 'items'.");
        }
      },
      (error) => {
        console.error("Error al obtener datos de la API:", error);
      }
    );
  }
}
