import { Component,Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor(){
  	this.products = [new Product('NYSHOES','Black running shoes','/assets/images/products/black-shoes.jpg',['Men','Shoes','Running shoes'],109.99),
                      new Product('NEATOJACKET','Blue jacket','/assets/images/products/blue-jacket.jpg',['Women','Apparel','Jackets & vests'],239.99),
                      new Product('NICEHAT','A nice black hat','/assets/images/products/black-hat.jpg',['Men','Accessories','Hats'],29.99)];
  }

  productWasSelected(product: Product): void{
  console.log("Product clicked: ", product);
  }
}
