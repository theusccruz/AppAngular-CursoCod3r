import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _snackbar: MatSnackBar) { }

  showMessage(msg: string): void {
    this._snackbar.open(msg, 'X', {
      duration: 1000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })    
  }
}
