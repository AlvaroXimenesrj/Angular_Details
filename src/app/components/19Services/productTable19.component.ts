import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { RepositoryMoq } from 'src/app/repository/repositoryMoq.model';
import { Product } from 'src/app/model/product.model';
import { PaCellColor } from '../16StructuralDirectives/cellColor.directive';
import { DiscountService } from './discount.service';
import { LogService } from '../20ServiceProvider/log.service';

@Component({
    selector: "paProductTable19",
    templateUrl: "productTable19.component.html",
    providers:[LogService]
})

export class ProductTableComponent19{
    //discounter: DiscountService = new DiscountService();

    constructor(private dataModel: RepositoryMoq) { }
    
    @Input("model")
    //dataModel: RepositoryMoq;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;
}
