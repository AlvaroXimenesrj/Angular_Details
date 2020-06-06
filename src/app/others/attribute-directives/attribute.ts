import { ApplicationRef, Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Repository } from '../../repository/repository.model';
import { Product } from "../../model/product.model";
import { ProductFormGroup } from '../basedforms/basedforms';



@Component({
    selector: "app-attribute",
    templateUrl: "attribute.html"
})

export class AttributeComponent implements OnInit{
    //product: Product = new Product();
    products: Product[];
    newProduct: Product = new Product();

    constructor(private repository: Repository) { }

    ngOnInit(){
    this.getProducts();
    }

   form: ProductFormGroup = new ProductFormGroup();

    getProduct(Key: number): Product {
        return this.repository.getProduct(Key);
    }

    // getProducts(): Product[] {
    //     return this.repository.getProducts2();
    // }

    getProducts(){
        return this.repository.getProducts()
        .subscribe(products => { 
            this.products = products;
        });
    }

    addProduct(p: Product) {
        p.price = +p.price;
        this.repository.saveProduct(p);
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