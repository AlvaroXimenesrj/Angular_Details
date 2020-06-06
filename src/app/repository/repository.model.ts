// Metadatas
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// Models
import { Product } from '../model/product.model';
import { SimpleDataSource } from './datasource';

@Injectable()

export class Repository {
    
    private products: Product[] = new Array<Product>();
    private product: Product = new Product();
    private locator = (p: Product, id: number) => p.id == id;
    url:string = '';
    id: number;
    
    constructor(private service: SimpleDataSource) { 
        this.service.getAll(this.url)
         .subscribe(data => this.products = data);
    }


    // getProducts(): Product[]{
    //     return this.products;
    //  }

    getProducts2(): Product[]{
        return this.products;
    }

    // getProducts2(): Observable<Product[]>{
        
    //     return this.service.getAll2(this.url).pipe<Product>
    //     (tap((response: any) => { return response; }));
    //  }

    getProduct(id:number): Product{
        return this.products.find(prod => this.locator(prod, id));
    }


     getProducts():Observable<Product[]>{
        return this.service.getAll(this.url).pipe<Product[]>
        (tap((response: any) => { return response; }));
    }

    deleteProduct(id: number){
        this.service.delete(this.url, id)
        .subscribe(task => this.products.splice(id));
    }

    saveProduct(product: Product){
        this.service.save(product)
         .subscribe(p => this.products.push(p));
     }
    

}