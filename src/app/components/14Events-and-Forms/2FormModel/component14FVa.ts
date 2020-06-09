import { RepositoryMoq } from 'src/app/repository/repositoryMoq.model';
import { NgForm } from "@angular/forms";
import { Component, ApplicationRef } from '@angular/core';
import { Product, Teste } from 'src/app/model/product.model';
import { ProductFormGroup } from "./form.model";


@Component({
    selector: "app",
    templateUrl: "template14FVa.html"
})
export class ProductComponent14FVa {
    //model: RepositoryMoq = new RepositoryMoq();

    constructor(private model: RepositoryMoq){ }

    form: ProductFormGroup = new ProductFormGroup();

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

    formSubmitted: boolean = false;

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
}