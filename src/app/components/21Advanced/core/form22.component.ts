import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { MODES, SharedState } from "./sharedState.model";

@Component({
    selector: "paForm22",
    templateUrl: "form22.component.html",
    styleUrls: ["form22.component.css"]
})

export class FormComponent22 {
    
    product: Product = new Product();
    
    constructor(private model: Model,
        private state: SharedState) { }

    get editing(): boolean {
        return this.state.mode == MODES.EDIT;
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        }
    }
    
    resetForm() {
        this.product = new Product();
    }
}