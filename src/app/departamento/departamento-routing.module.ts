import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDepartamentoComponent } from './form-departamento/form-departamento.component';
import { ListardepartamentoComponent } from './listardepartamento/listardepartamento.component';
const routes: Routes = [
  {path:"", component: ListardepartamentoComponent},
  {path:"novo", component:  FormDepartamentoComponent},
  {path:"editar/:id", component:  FormDepartamentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
