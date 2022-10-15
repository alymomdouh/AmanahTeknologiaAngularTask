import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products?: any;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res => {
      this.Products = res;
      console.log(this.Products);
    })
  }
  // buyProduct(item: any) {
  //   debugger
  //   //this.cartService.addtoCart(item);
  // }
}
