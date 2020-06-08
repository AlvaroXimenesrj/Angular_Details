import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { ProductComponent } from './components/12DataBindings/component';
import { ProductComponent13 } from './components/13Built-in-Directives/component13';
import { ProductComponent14 } from './components/14Events-and-Forms/component14';
import { ProductComponent14FV } from './components/14Events-and-Forms/1FormValidation/component14FV';
import { ProductComponent14FVa } from './components/14Events-and-Forms/2FormModel/component14FVa';
import { ProductComponent15 } from './components/15AttributeDirectives/component15';
import { ProductComponent16 } from './components/16StructuralDirectives/component16';
import { ProductComponent17 } from './components/17Components/component17';
import { ProductComponent18 } from './components/18Pipes/component18';
//import { ProductComponent18 } from './components/18Pipes/component18';

// Pense nos links que serão clicados, cada "clique" ou endereço
// direto no browser, encaminha para o endereço
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'DataBindings', component: ProductComponent },
  { path: 'BuildDirectives', component: ProductComponent13 },
  { path: 'EventForms', component: ProductComponent14 },
  { path: 'EventFormsFV', component: ProductComponent14FV },
  { path: 'FormModel', component: ProductComponent14FVa },
  { path: 'AttributeDirective', component: ProductComponent15 },
  { path: 'structuralDirective', component: ProductComponent16 },
  { path: 'Components', component: ProductComponent17 },
  { path: 'Pipes', component: ProductComponent18 }

  // { path: 'template/create', component: TemplateCreateComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: false });

