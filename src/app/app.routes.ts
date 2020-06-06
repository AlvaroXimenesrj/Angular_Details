import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './others/ProductComponent';
import { HomeComponent } from './shared/home/home.component';
import { TwoWayComponent } from './others/two-way-databinding';
import { FormComponent } from './others/basedforms/form.component';
import { AttributeComponent } from './others/attribute-directives/attribute';
import { StructuralComponent } from './others/structural-directives/structural';
// Pense nos links que serão clicados, cada "clique" ou endereço
// direto no browser, encaminha para o endereço
export const routes: Routes = [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'template', component: ProductComponent},
    { path: 'twoway', component: TwoWayComponent},
    { path: 'basedforms', component: FormComponent},
    { path: 'attribute', component: AttributeComponent},
    { path: 'structural', component: StructuralComponent},
    // { path: 'template', component: TemplateComponent},
    // { path: 'template', component: TemplateComponent},
    // { path: 'template', component: TemplateComponent},

    // { path: 'template/create', component: TemplateCreateComponent}
  ];

export const routing = RouterModule.forRoot(routes, { useHash: false } );

