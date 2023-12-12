import { Component } from '@angular/core';
import { Idepartamento } from '../service/idepartamento';
import { DepartamentoService } from '../service/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-listardepartamento',
  templateUrl: './listardepartamento.component.html',
  styleUrls: ['./listardepartamento.component.scss']
})
export class ListardepartamentoComponent {
  funcionario: Idepartamento[] = [];

  form = new FormGroup({
   id: new FormControl(),
   nome: new FormControl(''),
  localidade: new FormControl(),
  descricaoatividades: new FormControl(),
  email: new FormControl(),
  })
  departamento: any;
  constructor(
    private service: DepartamentoService, 
    private router: Router, 
    private route: ActivatedRoute){ }

  ngOnInit(): void {
     this.Listar();
  }
  Listar(){
    // a minha variavel do tipo cursos está recebendo o json da API
    this.service.listar().subscribe(dados => this.departamento = dados);
 }

 Editar(id:number){
   this.router.navigate(['editar', id], {relativeTo: this.route});
 }

 Excluir(id:number){
   this.service.excluir(id).subscribe(
     success => {
       alert("Departamento excluido com sucesso!")
       this.service.listar().subscribe(dados => this.departamento = dados);
     },
     Error => alert("Erro ao excluir o departamento ")
   );
 }

}
