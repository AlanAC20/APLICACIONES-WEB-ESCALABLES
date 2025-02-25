import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowProductComponent } from "./components/show-product/show-product.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShowProductComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-productos';
}
