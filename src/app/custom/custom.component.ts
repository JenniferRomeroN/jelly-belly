import { Component, ViewChild, ElementRef, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    CommonModule,
    FooterComponent
  ],
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit { 
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private image!: HTMLImageElement;

  userName: string = ''; 
  selectedColor: string = '#ff0000'; 
  jellyBeanData: any[] = []; 

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ctx = this.canvas.nativeElement.getContext('2d')!;
      this.image = new Image();
      this.image.src = '/jellybean.png'; 
      this.image.onload = () => {
        this.ctx.drawImage(this.image, 0, 0, 500, 500);
      };

      const storedData = sessionStorage.getItem('jellyBeans');
      if (storedData) {
        this.jellyBeanData = JSON.parse(storedData);
      }
    } else {
      console.error('No es posible acceder al canvas en este entorno.');
    }
  }

  changeColor(event: Event) {
    this.selectedColor = (event.target as HTMLInputElement).value;
    this.updateCanvasColor(); 
  }

  updateCanvasColor() {
    if (this.ctx) {
      this.ctx.drawImage(this.image, 0, 0, 500, 500);
      this.ctx.globalCompositeOperation = 'source-in'; 
      this.ctx.fillStyle = this.selectedColor;
      this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.globalCompositeOperation = 'source-over'; 
    }
  }

  drawTextOnCanvas(text: string) {
    if (this.ctx) {
    
      this.ctx.font = '30px Arial';
      this.ctx.fillStyle = '#ffffff'; 
      this.ctx.textAlign = 'center';
      this.ctx.fillText(
        text,
        this.canvas.nativeElement.width / 2, 
        this.canvas.nativeElement.height / 2 
      );
    }
  }


  generateCard() {
    if (this.userName.trim()) {
  
      this.updateCanvasColor();

    
      this.drawTextOnCanvas(this.userName);

  
      const jellyBeanImage = this.canvas.nativeElement.toDataURL('image/png');


      const jellyBean = {
        name: this.userName,
        color: this.selectedColor,
        image: jellyBeanImage,
      };

      this.jellyBeanData.push(jellyBean);

      sessionStorage.setItem('jellyBeans', JSON.stringify(this.jellyBeanData));

      this.clearForm(); 
    } else {
      alert('Por favor, ingresa un nombre.');
    }
  }


  clearForm() {
    this.userName = '';
    this.selectedColor = '#ff0000';
  }
}
