import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Repository } from '../../repository/repository.model';
import { Product } from "../../model/product.model";
import { BasedFormComponent } from './basedforms';
import { ProductFormGroup } from './basedforms';



@Component({
    selector: "app-basedforms",
    templateUrl: "basedforms.html"
})

export class FormComponent {
    product: Product = new Product();
    products: Product[];
    newProduct: Product = new Product();

    constructor(private repository: Repository) { }


   form: ProductFormGroup = new ProductFormGroup();

    getProduct(Key: number): Product {
        return this.repository.getProduct(Key);
    }

    getProducts(): Product[] {
        return this.repository.getProducts2();
    }

    
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