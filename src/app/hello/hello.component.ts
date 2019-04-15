import { Component, OnInit, Input } from '@angular/core';
import { TransactionsService } from 'src/services/transactions.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = <Product>{};

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsService
      .getAll()
      .subscribe(x => this.products = x);
  }

  public saveTransaction() {
    this.transactionsService
      .save(this.newProduct)
      .subscribe(x => this.ngOnInit());
  }
}
