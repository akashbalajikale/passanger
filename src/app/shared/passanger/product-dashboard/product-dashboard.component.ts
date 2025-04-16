import { Component, OnInit } from '@angular/core';
import { PassangerServices } from '../../services/passanger.service';
import { Ipassanger } from '../../models/passanger';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  passArray : Array<Ipassanger> = []
  checkInCount !: number
 
  constructor(private _passService : PassangerServices) { }

  ngOnInit(): void {
    this.passArray = this._passService.fetchAllpassnger()
    this.getcheckedCount()
  }
getcheckedCount(){
  this.checkInCount = this.passArray.filter(pass => pass.checkedIn).length
}
}
