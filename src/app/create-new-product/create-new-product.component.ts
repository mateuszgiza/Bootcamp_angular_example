import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { TransactionsService } from 'src/services/transactions.service';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss']
})
export class CreateNewProductComponent {
  newProduct: Product = <Product>{};

  constructor(private transactionsService: TransactionsService) { }

  public saveTransaction() {
    this.transactionsService
      .save(this.newProduct)
      .subscribe(x => x);
  }
}
