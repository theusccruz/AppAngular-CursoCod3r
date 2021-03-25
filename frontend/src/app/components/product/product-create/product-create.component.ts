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
    this._productService.create(this.product)
    .subscribe(() => {
      this._productService.showMessage('Produto criado!!');
      this._router.navigate(['/products']);
    });
  }

  cancel(): void {
    this._router.navigate(['/products']);
  }

}
