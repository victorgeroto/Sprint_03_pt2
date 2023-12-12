import { Component } from '@angular/core';
import { Iprojeto } from '../service/iprojeto';
import { ProjetoService } from '../service/projeto.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-listarprojeto',
  templateUrl: './listarprojeto.component.html',
  styleUrls: ['./listarprojeto.component.scss']
})
export class ListarprojetoComponent {
  projeto: Iprojeto[] = [];

  form = new FormGroup({
    id:new FormControl(),
    nome:new FormControl(''),
    descricao:new FormControl(''),
    qteparticipantes:new FormControl(''),
    responsavel:new FormControl(''),
    custo:new FormControl(''),
  })

  constructor(
    private service: ProjetoService, 
    private router: Router, 
    private route: ActivatedRoute){ }

  ngOnInit(): void {
     this.Listar();
  }

  Listar(){
     // a minha variavel do tipo cursos está recebendo o json da API
     this.service.listar().subscribe(dados => this.projeto = dados);
  }

  Editar(id:number){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  Excluir(id:number){
    this.service.excluir(id).subscribe(
      success => {
        alert("Projeto excluida com sucesso!")
        this.service.listar().subscribe(dados => this.projeto = dados);
      },
      Error => alert("Erro ao excluir a projeto ")
    );
  }

}
