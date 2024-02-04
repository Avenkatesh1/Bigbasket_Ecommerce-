import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'web-products-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {
  productList: any[]=[];
  categoryList: any[] = [];
  constructor(private prodSrv:ProductService,private router:Router) {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  navigateToPRoducts(id: number) {
    this.router.navigate(['/products',id])
  }

  addToCart (productId: number) {
    const addtocartObj = {
      "CartId": 0,
      "CustId": 379,
      "ProductId": productId,
      "Quantity": 1,
      "AddedDate":  new Date()
    };
    this.prodSrv.addToCart(addtocartObj).subscribe((res:any) => {
      if(res.result) {
        alert("Product Added to cart");
        debugger;
        this.prodSrv.cartUpdated$.next(true);
      } else {
        alert(res.message)
      }
    })
  }

  getAllProducts() {
    this.prodSrv.getProducts().subscribe((res:any)=>{
      debugger;
      this.productList = res.data;
    })
  }
  getAllCategory() {
    this.prodSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }

}
