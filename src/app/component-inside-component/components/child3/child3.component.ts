import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/component-inside-component/models/product.model';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  @Input() product: Product = new Product();
  @Output() productChange: EventEmitter<Product> = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public changeProductStatus(): void {
    this.product.active = !this.product.active;
    this.product.name = "Child3";
    this.product.value = 3;

    this.productChange.emit(this.product);
  }
  
  public sumProductValue(): void {
    this.product.value++;
  }

}
