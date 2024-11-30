import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {
  beansList: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllBeans(); 
  }

  getAllBeans() {
    this.http.get("https://jellybellywikiapi.onrender.com/api/Beans").subscribe((result: any) => {
      console.log("Data:", result);
      this.beansList = result;
    }, (error) => {
      console.error("Error fetching data:", error); 
    });
  }
}
