import { Component, OnInit } from "@angular/core";
import { Repository } from '../repository/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: "app",
    templateUrl: "template.html"
})

export class ProductComponent {

    product: Product = new Product();
    products: Product[];

    constructor(private repository: Repository) { }



    getClasses(): string {
        return this.repository.getProducts2().length == 4 ? "bg-success" : "bg-warning";
    }

    getProductCount(): number {
        return this.getProducts().length;
    }

    getProducts() {
        return this.repository.getProducts2();
    }

    selectedProduct: string;

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }




}