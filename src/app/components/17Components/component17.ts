import { RepositoryMoq } from 'src/app/repository/repositoryMoq.model';
import { NgForm } from "@angular/forms";
import { Component, ApplicationRef } from '@angular/core';
import { Product, Teste } from 'src/app/model/product.model';

@Component({
    selector: "app",
    templateUrl: "template17.html"
    //styles: ["/deep/ div { border: 2px black solid; font-style:italic }"]
})

export class ProductComponent17 {

    model: RepositoryMoq = new RepositoryMoq();
    
    addProduct(p: Product) {
        this.model.saveProduct(p);
    }
}