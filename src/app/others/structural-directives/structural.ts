import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Repository } from '../../repository/repository.model';
import { Product } from "../../model/product.model";
import { ProductFormGroup } from '../basedforms/basedforms';



@Component({
    selector: "app-structural",
    templateUrl: "structural.html"
})

export class StructuralComponent {
    //product: Product = new Product();
    //products: Product[];
    newProduct: Product = new Product();

    constructor(private repository: Repository) { }


   form: ProductFormGroup = new ProductFormGroup();

    getProduct(Key: number): Product {
        return this.repository.getProduct(Key);
    }

    getProducts(): Product[] {
        return this.repository.getProducts2();
    }

    addProduct(p: Product) {
        p.price = +p.price;
        this.repository.saveProduct(p);
    }

    deleteProduct(key: number) {
        this.repository.deleteProduct(key);
        }

    formSubmitted: boolean = false;

    showTable: boolean = false;

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
