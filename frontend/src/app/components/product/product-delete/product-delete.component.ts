import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute) { }  

  ngOnInit(): void { 
    const productId = +this._route.snapshot.paramMap.get('id');   
    this._productService.readById(productId)
    .subscribe(product => this.product = product)
  }

  deleteProduct(): void {    
    this._productService.delete(this.product.id)
    .subscribe(() => { 
      this._productService
      .showMessage(`Produto ${this.product.id} (${this.product.name}) deletado com sucesso!`);
      this._router.navigate(['/products']);
    })    
  }

  cancel(): void {
    this._router.navigate(['/products']);
  }

}
