import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private _productService: ProductService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    if (this.product.name === '' || this.product.price === null) {
      this._productService.showMessage(`Nenhum produto foi criado`);
      this._router.navigate(['/products']);
    } else {
      this._productService.create(this.product)
        .subscribe(() => {
          this._productService.showMessage(`Produto ${this.product.name} foi criado!`);
          this._router.navigate(['/products']);
        });
    }
  }

  cancel(): void {
    this._router.navigate(['/products']);
  }

}
