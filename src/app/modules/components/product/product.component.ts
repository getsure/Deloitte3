import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:any;
  constructor(private activatedRoute:ActivatedRoute, private productsService:ProductsService) { }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.params['id']

    this.productsService.getSingleProduct(productId).subscribe(res => {
      this.product = res
    })


  }

}
