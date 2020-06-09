import { RepositoryMoq } from 'src/app/repository/repositoryMoq.model';
import { Component, ApplicationRef } from '@angular/core';
import { Product } from 'src/app/model/product.model';


@Component({
    selector: "app",
    templateUrl: "template13.html"
})
export class ProductComponent13 {
    // model: RepositoryMoq = new RepositoryMoq();

    constructor(private model: RepositoryMoq,
        ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        console.log("getProductCount invoked");
        return this.getProducts().length;
    }

    targetName: string = "Kayak";

    getKey(index: number, product: Product) {
        return product.id;
    }

    counter: number = 1;

    get nextProduct(): Product {
        return this.model.getProducts().shift();
    }

    getProductPrice(index: number): number {
        return Math.floor(this.getProduct(index).price);
    }
}