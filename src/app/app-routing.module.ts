import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'product', component: ProductComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
