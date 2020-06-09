// Metas:
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components:
import { NavBarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { Repository } from '../repository/repository';
import { SimpleDataSource } from '../repository/datasource';
import { RepositoryMoq } from '../repository/repositoryMoq.model';
import { SimpleDataSourceMoq } from '../repository/datasourceMoq.model';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from '../components/12DataBindings/component';
import { ProductComponent13 } from '../components/13Built-in-Directives/component13';
import { ProductComponent14 } from '../components/14Events-and-Forms/component14';
import { ProductComponent14FV } from '../components/14Events-and-Forms/1FormValidation/component14FV';
import { ProductComponent14FVa } from '../components/14Events-and-Forms/2FormModel/component14FVa';
import { ProductComponent15 } from '../components/15AttributeDirectives/component15';
import { PaAttrDirective } from '../components/15AttributeDirectives/attr.directive';
import { PaModel } from '../components/15AttributeDirectives/twoway.directive';
import { ProductComponent16 } from '../components/16StructuralDirectives/component16';
import { PaStructureDirective } from '../components/16StructuralDirectives/structure.directive';
import { PaIteratorDirective } from '../components/16StructuralDirectives/iterator.directive';
import { PaCellColor } from '../components/16StructuralDirectives/cellColor.directive';
import { PaCellColorSwitcher } from '../components/16StructuralDirectives/cellColorSwitcher.directive';
import { ProductComponent17 } from '../components/17Components/component17';
import { ProductTableComponent } from '../components/17Components/productTable.component';
import { ProductFormComponent } from '../components/17Components/productForm.component';
import { PaToggleView } from '../components/17Components/toggleView.component';
import { ProductComponent18 } from '../components/18Pipes/component18';
import { PaCellColor18 } from '../components/18Pipes/cellColor18.directive';
import { ProductFormComponent18 } from '../components/18Pipes/productForm18.component';
import { ProductTableComponent18 } from '../components/18Pipes/productTable18.component';
import { PaAddTaxPipe } from '../components/18Pipes/addTax.pipe';
import { PaCategoryFilterPipe } from '../components/18Pipes/categoryFilter.pipe';
//import { PaAddTaxPipe } from '../components/18Pipes/addTax.pipe';
//import { PaCellColor2 } from '../components/18Pipes/cellColor.directive';
import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ProductComponent19 } from '../components/19Services/component19';
import { ProductTableComponent19 } from '../components/19Services/productTable19.component';
import { PaDiscountDisplayComponent } from '../components/19Services/discountDisplay.component';
import { PaDiscountEditorComponent } from '../components/19Services/discountEditor.component';
import { DiscountService } from '../components/19Services/discount.service';
import { ProductFormComponent19 } from '../components/19Services/productForm19.component';
import { PaDiscountPipe } from '../components/19Services/discount.pipe';
import { PaDiscountAmountDirective } from '../components/19Services/discountAmount.directive';
import { LogService, LOG_SERVICE, SpecialLogService } from '../components/20ServiceProvider/log.service';
registerLocaleData(localeFr);


@NgModule({
    imports: [BrowserModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterModule],

    declarations: 
    //shared content
    [NavBarComponent,
     MainComponent,
     HomeComponent,
     // Othres Component:
     ProductComponent,
     ProductComponent13,
     ProductComponent14,
     ProductComponent14FV,
     ProductComponent14FVa,
     ProductComponent15,
     ProductComponent16,
     ProductComponent17,
     ProductComponent18,
     ProductTableComponent,
     ProductFormComponent,
     ProductFormComponent18,
     ProductTableComponent18,
     ProductTableComponent19,
     ProductComponent19,
     PaDiscountDisplayComponent, 
     PaDiscountEditorComponent,
     ProductFormComponent19,
     PaDiscountAmountDirective,
     //directives
     PaAttrDirective,
     PaModel,
     PaStructureDirective,
     PaIteratorDirective,
     PaCellColor,
     PaCellColorSwitcher,
     PaToggleView,
     PaCellColor18,
     PaAddTaxPipe,
     PaCategoryFilterPipe,
     PaDiscountPipe
    ],
    providers: [Repository, 
        SimpleDataSource,
        RepositoryMoq, 
        SimpleDataSourceMoq,
        DiscountService,
        { provide: LOG_SERVICE, useClass: LogService, multi: true },
        { provide: LOG_SERVICE, useClass: SpecialLogService, multi: true }
        //{ provide: LOCALE_ID, useValue: "fr-FR" }
    ],

    exports: [
        // Meta:
        FormsModule,
        BrowserModule,
        //shared compoentn
        MainComponent,
        NavBarComponent,
        HomeComponent,
        //other Component
        ProductComponent,
        ProductComponent13,
        ProductComponent14,
        ProductComponent14FV,
        ProductComponent14FVa,
        ProductComponent15,
        ProductComponent16,
        ProductComponent17,
        ProductComponent18,
        ProductTableComponent,
        ProductFormComponent,
        ProductFormComponent18,
        ProductTableComponent18,
        ProductComponent19,
        ProductTableComponent19,
        ProductFormComponent19,
        PaDiscountDisplayComponent, 
        PaDiscountEditorComponent,
        //directives
        PaAttrDirective,
        PaModel,
        PaStructureDirective,
        PaIteratorDirective,
        PaCellColor,
        PaCellColorSwitcher,
        PaToggleView,
        PaCellColor18,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountPipe,
        PaDiscountAmountDirective
    ],

})

export class SharedModule { }