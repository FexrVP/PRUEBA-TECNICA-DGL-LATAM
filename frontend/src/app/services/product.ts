import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
  finalPrice: number;
  isLowStock: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
