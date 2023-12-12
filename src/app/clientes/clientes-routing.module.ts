import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { ListarclientesComponent } from './listarclientes/listarclientes.component';

const routes: Routes = [
  {path:"", component: ListarclientesComponent},
  {path:"novo", component: FormClientesComponent},
  {path:"editar/:id", component: FormClientesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
