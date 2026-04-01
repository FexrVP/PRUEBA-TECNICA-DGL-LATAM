import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  loading = true;
  error = false;

  constructor(private productService: ProductService) {}

ngOnInit(): void {
  console.log('ngOnInit ejecutado');
  this.productService.getProducts().subscribe({
    next: (data) => {
      console.log('Datos recibidos:', data);
      this.products = data;
      this.loading = false;
    },
    error: (err) => {
      console.error('Error en suscripción:', err);
      this.error = true;
      this.loading = false;
    }
  });
}
}