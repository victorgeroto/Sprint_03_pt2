import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFornecedorComponent } from './form-fornecedor/form-fornecedor.component';
import { ListarfornecedorComponent } from './listarfornecedor/listarfornecedor.component';

const routes: Routes = [
  {path:"", component: ListarfornecedorComponent},
  {path:"novo", component: FormFornecedorComponent},
  {path:"editar/:id", component: FormFornecedorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
