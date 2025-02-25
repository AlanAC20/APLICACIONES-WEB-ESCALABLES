import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/show.interface';

@Component({
  selector: 'app-detail-product',
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {

  @Input()
  product!: Product;
}
