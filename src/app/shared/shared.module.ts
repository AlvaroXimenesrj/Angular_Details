// Metas:
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components:
import { NavBarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { Repository } from '../repository/repository.model';
import { SimpleDataSource } from '../repository/datasource';
import { ProductComponent } from '../others/ProductComponent';
import { HomeComponent } from './home/home.component';
import { TwoWayComponent } from '../others/two-way-databinding';
import { FormComponent } from '../others/basedforms/form.component';
import { AttributeComponent } from '../others/attribute-directives/attribute';
import { PaAttrDirective } from '../others/attribute-directives/attr.directive';
import { PaModel } from '../others/attribute-directives/twoway.directive';
import { StructuralComponent } from '../others/structural-directives/structural';
import { PaStructureDirective } from '../others/structural-directives/structure.directive';
import { PaIteratorDirective } from '../others/structural-directives/iterator.directive';
import { PaCellColor } from "../others/structural-directives/cellColor.directive";
import { PaCellColorSwitcher } from "../others/structural-directives/cellColorSwitcher.directive";


@NgModule({
    imports: [BrowserModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterModule],

    declarations: [NavBarComponent,
        MainComponent,
        ProductComponent,
        HomeComponent,
        TwoWayComponent,
        FormComponent,
        AttributeComponent,
        StructuralComponent,
        PaAttrDirective,
        PaModel,
        PaStructureDirective,
        PaIteratorDirective,
        PaCellColor,
        PaCellColorSwitcher
        //BasedFormComponent
    ],
    providers: [Repository, SimpleDataSource],

    exports: [MainComponent,
        NavBarComponent,
        ProductComponent,
        TwoWayComponent,
        FormComponent,
        AttributeComponent,
        StructuralComponent,
        PaAttrDirective,
        PaModel,
        PaStructureDirective,
        PaIteratorDirective,
        PaCellColor,
        PaCellColorSwitcher,
        // BasedFormComponent,
        FormsModule,
        BrowserModule,
        HomeComponent],

})

export class SharedModule { }