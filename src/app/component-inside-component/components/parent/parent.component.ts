import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/component-inside-component/models/product.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public product: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

  public changeProductStatus(): void {
    this.product.active = !this.product.active;
    this.product.name = "Parent";
    this.product.value = 0;
  }

  public sumProductValue(): void {
    this.product.value++;
  }

}
