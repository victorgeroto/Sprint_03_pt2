import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarclientesComponent } from './listarclientes/listarclientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
@NgModule({
  declarations: [
    ListarclientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
