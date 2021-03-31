import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/products';

  constructor(private _snackbar: MatSnackBar,
    private _http: HttpClient) { }

  showMessage(msg: string): void {
    this._snackbar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })        
  }

  create(product: Product): Observable<Product> {
    return this._http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<Product>(url);
  } 

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this._http.put<Product>(url, product);
  }
}
