import { Component, OnInit } from '@angular/core';
import { Iprojeto } from '../service/iprojeto';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjetoService } from '../service/projeto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
@Component({
  selector: 'app-form-projeto',
  templateUrl: './form-projeto.component.html',
  styleUrls: ['./form-projeto.component.scss']
})
export class FormProjetoComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    descricao: new FormControl(''),
    qtdeparticipantes: new FormControl(''),
    responsavel: new FormControl(''),
    custo: new FormControl(''),
  })

  constructor(
    private service: ProjetoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { this.ListarPorId(); }

  Salvar() {
    if (this.form.value.id) {
      this.service.atualizar(this.form.value).subscribe(
        success => {
          alert("Projeto atualizada com sucesso!");
          this.router.navigate(['projeto']);
        },
        error => alert("Erro ao atualizar a projeto ")
      );
    } else {
      this.service.criar(this.form.value).subscribe(
        success => {
          alert("Projeto cadastrada com sucesso!");
          this.router.navigate(['projeto']);
        },
        error => alert("Erro ao cadastrar a projeto ")
      );
    }

    this.form.reset();
  }

  ListarPorId() {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.service.listarPorId(id))
      )
      .subscribe(projeto => this.atualizar(projeto));
  }

  atualizar(projeto: Iprojeto) {
    this.form.patchValue({
      id: projeto.id,
      nome: projeto.nome,
      descricao: projeto.descricao,
      qtdeparticipantes: projeto.qtdeparticipantes,
      responsavel: projeto.responsavel,
      custo: projeto.custo,
    });
  }

  Cancelar() {
    this.form.reset();
    console.log('Cancelado');
  }
}
