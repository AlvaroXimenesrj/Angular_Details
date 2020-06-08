import { RepositoryMoq } from 'src/app/repository/repositoryMoq.model';
import { NgForm } from "@angular/forms";
import { Component, ApplicationRef } from '@angular/core';
import { Product, Teste } from 'src/app/model/product.model';

@Component({
    selector: "app",
    templateUrl: "template18.html"
})

export class ProductComponent18{

    model: RepositoryMoq = new RepositoryMoq();
    
    addProduct(p: Product) {
        this.model.saveProduct(p);
    }
}