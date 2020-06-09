import { RepositoryMoq } from 'src/app/repository/repositoryMoq.model';
import { Component, ApplicationRef } from '@angular/core';
import { Product, Teste } from 'src/app/model/product.model';


@Component({
    selector: "app",
    templateUrl: "template14.html"
})
export class ProductComponent14 {
    //model: RepositoryMoq = new RepositoryMoq();

    constructor(private model: RepositoryMoq){ }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }

    selectedProduct: string;

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }

    newProduct: Product = new Product();
    teste: Teste = new Teste();
    
    
    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
    }
}