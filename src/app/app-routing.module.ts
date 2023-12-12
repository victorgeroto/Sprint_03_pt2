import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesModule } from './clientes/clientes.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ProjetoModule } from './projeto/projeto.module';




const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:''},
  {path:'clientes', loadChildren:()=> ClientesModule},
  {path:'fornecedor', loadChildren:()=> FornecedorModule},
  {path:'funcionario', loadChildren:()=> FuncionarioModule},
  {path:'departamento', loadChildren:()=> DepartamentoModule},
  {path:'empresa', loadChildren:()=> EmpresaModule},
  {path:'projeto', loadChildren:()=> ProjetoModule},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
