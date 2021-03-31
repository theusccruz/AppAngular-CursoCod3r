import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._productService.readById(id)
    .subscribe(product => this.product = product)
  }

  updateProduct(): void {
    this._productService.update(this.product)
    .subscribe(() => { 
      this._productService.showMessage(`Produto ${this.product.id} atualizado com sucesso!`);
      this._router.navigate(['/products']);
    })
  }

  cancel(): void {
    this._router.navigate(['/products']);

  }
}
