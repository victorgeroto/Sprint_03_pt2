import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { ListarempresaComponent } from './listarempresa/listarempresa.component';
const routes: Routes = [
  {path:"", component: ListarempresaComponent},
  {path:"novo", component: FormEmpresaComponent},
  {path:"editar/:id", component: FormEmpresaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
