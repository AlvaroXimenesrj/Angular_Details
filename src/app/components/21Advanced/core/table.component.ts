import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState } from "./sharedState.model";

@Component({
    selector: "paTable22",
    templateUrl: "table22.component.html"
})

export class TableComponent22 {
    constructor(private model: Model, private state: SharedState) { }
    
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    
    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }
    
    editProduct(key: number) {
        this.state.id = key;
        this.state.mode = MODES.EDIT;
    }
    
    createProduct() {
        this.state.id = undefined;
        this.state.mode = MODES.CREATE;
    }
}