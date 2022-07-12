import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/component-inside-component/models/product.model';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() product: Product = new Product();
  @Output() productChange: EventEmitter<Product> = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public changeProductStatus(): void {
    this.product.active = !this.product.active;
    this.product.name = "Child2";
    this.product.value = 2;

    this.productChange.emit(this.product);
  }

  public sumProductValue(): void {
    this.product.value++;
  }

}
