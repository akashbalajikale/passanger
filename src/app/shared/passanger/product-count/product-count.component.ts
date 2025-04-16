import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss']
})
export class ProductCountComponent implements OnInit {
@Input() TotalcheckIn !: number
@Input() TotalpassCount !: number
  constructor() { }

  ngOnInit(): void {
  }

}
