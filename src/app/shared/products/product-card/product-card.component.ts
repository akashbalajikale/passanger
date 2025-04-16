import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, ProductStatus } from '../../models/product';
import { ProductServices } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() passObj !: Iproduct

  productstaus = ProductStatus
  constructor( private _productService : ProductServices) { }

  ngOnInit(): void {
  }
  
  statusUpadte(UpdatedStatus : ProductStatus){
    this._productService.UpdatedStatus(UpdatedStatus, this.passObj.pId)
  }

}
