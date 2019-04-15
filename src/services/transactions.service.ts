import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from './servicebase';
import { Product } from 'src/models/product.model';

@Injectable({
    providedIn: 'root',
})
export class TransactionsService {
    constructor(private api: ServiceBase) { }

    public getAll(): Observable<Product[]> {
        return this.api.get("/product");
    }

    public save(transaction: Product): Observable<any> {
        return this.api.post("/product", transaction);
    }
}