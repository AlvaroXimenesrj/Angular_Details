import { Component, OnInit } from "@angular/core";
import { Repository } from '../repository/repository.model';
import { Product } from '../model/product.model';
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-twoway",
    templateUrl: "two-way-databinding.html"
})

export class TwoWayComponent {

    product: Product = new Product();
    products: Product[];
    newProduct: Product = new Product();

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

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
    }

    getValidationMessages(state: any, thingName?: string) {
        let thing: string = state.path || thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter a ${thing}`);
                        break;
                    case "minlength":
                        messages.push(`A ${thing} must be at least
        ${state.errors['minlength'].requiredLength}
        characters`);
                        break;
                    case "pattern":
                        messages.push(`The ${thing} contains
        illegal characters`);
                        break;
                }
            }
        }
        return messages;
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

    getFormValidationMessages(form: NgForm): string[] {
        let messages: string[] = [];
        Object.keys(form.controls).forEach(k => {
            this.getValidationMessages(form.controls[k], k)
                .forEach(m => messages.push(m));
        });
        return messages;
    }
}