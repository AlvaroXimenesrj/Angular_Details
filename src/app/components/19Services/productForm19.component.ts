import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { Product } from 'src/app/model/product.model';
import { ProductFormGroup } from '../14Events-and-Forms/2FormModel/form.model';
import { RepositoryMoq } from 'src/app/repository/repositoryMoq.model';

@Component({
    selector: "paProductForm19",
    templateUrl: "productForm19.component.html",
    // styleUrls: ["productForm18.component.css"],
    // encapsulation: ViewEncapsulation.Emulated
})

export class ProductFormComponent19{
    
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    constructor(private model: RepositoryMoq){}
    
    @Output("paNewProduct19")
    newProductEvent = new EventEmitter<Product>();
    
    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            //this.newProductEvent.emit(this.newProduct);
            this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}