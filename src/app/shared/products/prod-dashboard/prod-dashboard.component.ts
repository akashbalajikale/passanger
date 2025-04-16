import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../../services/product.service';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-prod-dashboard',
  templateUrl: './prod-dashboard.component.html',
  styleUrls: ['./prod-dashboard.component.scss']
})
export class ProdDashboardComponent implements OnInit {
 productArr : Array<Iproduct> =[]
  constructor( private _productService : ProductServices ) { }

  ngOnInit(): void {
    this.productArr = this._productService.fetchAllProduct()
  }

}
