import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/products';

  constructor(private _snackbar: MatSnackBar,
    private _http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this._snackbar.open(msg, 'Fechar', {
      duration: 2700,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msgError'] : ['msgSuccess']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  isEmpty(product): boolean {
    if (product.name === '' || product.price === null) {
      this.showMessage('Preencha todos os campos corretamente!');
      return true
    }
  }

  create(product: Product): Observable<Product> {
    if (!this.isEmpty(product)) {
      return this._http.post<Product>(this.baseUrl, product).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }
  }

  read(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl);
  }

  readById(productId: number): Observable<Product> {
    const url = `${this.baseUrl}/${productId}`;
    return this._http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;

    if (!this.isEmpty(product)) {
      return this._http.put<Product>(url, product).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }
  }

  delete(productId: number): Observable<Product> {
    const url = `${this.baseUrl}/${productId}`;

    return this._http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
