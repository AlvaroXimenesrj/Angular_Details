import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { Product } from 'src/app/model/product.model';
import { ProductFormGroup } from '../14Events-and-Forms/2FormModel/form.model';

@Component({
    selector: "paProductForm18",
    templateUrl: "productForm18.component.html",
    // styleUrls: ["productForm18.component.css"],
    // encapsulation: ViewEncapsulation.Emulated
})

export class ProductFormComponent18{
    
    form: ProductFormGroup = new ProductFormGroup();
    
    newProduct: Product = new Product();
    
    formSubmitted: boolean = false;
    @Output("paNewProduct18")
    newProductEvent = new EventEmitter<Product>();
    
    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}