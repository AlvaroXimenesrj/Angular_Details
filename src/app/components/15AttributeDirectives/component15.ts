import { RepositoryMoq } from 'src/app/repository/repositoryMoq.model';
import { NgForm } from "@angular/forms";
import { Component, ApplicationRef } from '@angular/core';
import { Product, Teste } from 'src/app/model/product.model';
import { ProductFormGroup } from '../14Events-and-Forms/2FormModel/form.model';


@Component({
    selector: "app",
    templateUrl: "template15.html"
})

export class ProductComponent15 {

    //model: RepositoryMoq = new RepositoryMoq();

    constructor(private model: RepositoryMoq){ }

    form: ProductFormGroup = new ProductFormGroup();

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    newProduct: Product = new Product();

    addProduct(p: Product) {
        this.model.saveProduct(p);
    }

    formSubmitted: boolean = false;

    submitForm(form: NgForm) {
        this.form.productControls.forEach(c => this.newProduct[c.modelProperty] = c.value);
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
}