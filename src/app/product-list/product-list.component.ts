import { Component, OnInit, Input } from '@angular/core';
import { TransactionsService } from 'src/services/transactions.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsService
      .getAll()
      .subscribe(x => this.products = x);
  }
}
