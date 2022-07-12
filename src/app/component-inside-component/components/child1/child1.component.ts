import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/component-inside-component/models/product.model';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() product: Product = new Product();
  @Output() productChange: EventEmitter<Product> = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public changeProductStatus(): void {
    this.product.active = !this.product.active;
    this.product.name = "Child1";
    this.product.value = 1;

    this.productChange.emit(this.product);
  }

  public sumProductValue(): void {
    this.product.value++;
  }

}
