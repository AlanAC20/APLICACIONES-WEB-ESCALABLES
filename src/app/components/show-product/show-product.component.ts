import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/show.interface';
import { NgClass } from '@angular/common';
import { DetailProductComponent } from "../detail-product/detail-product.component";
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-show-card',
  imports: [NgClass, DetailProductComponent, NgFor, NgIf],
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css'
})



export class ShowProductComponent {

  products: Product[] = [{ id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true }];


    selectedProduct?: Product;
    selectProduct(product: Product) {
      this.selectedProduct = product;
    }

  
}
