import { Component, OnInit } from '@angular/core';
import { Ifuncionario } from '../service/ifuncionario';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionarioService } from '../service/funcionario.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.scss']
})
export class FormFuncionarioComponent implements OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cargo: new FormControl(''),
    salario: new FormControl(''),
    areaatuacao: new FormControl(''),
    localtrabalho: new FormControl(''),
  });
  constructor(
    private service: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.ListarPorId();
  }
  Salvar() {
    if (this.form.value.id) {
      this.service.atualizar(this.form.value).subscribe(
        success => {
          alert('Funcionario atualizado com sucesso!');
          this.router.navigate(['funcionario']);
        },
        error => alert('Erro ao atualizar o funcionario ')
      );
    } else {
      this.service.criar(this.form.value).subscribe(
        success => {
          alert('Funcionario cadastrado com sucesso!');
          this.router.navigate(['funcionario']);
        },
        error => alert('Erro ao cadastrar o funcionario ')
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
      .subscribe(funcionario => this.atualizar(funcionario));
  }

  atualizar(funcionario: Ifuncionario) {
    this.form.patchValue({
      id: funcionario.id,
      nome: funcionario.nome,
      cargo: funcionario.cargo,
      salario: funcionario.salario,
      areaatuacao: funcionario.areaatuacao, 
      localtrabalho: funcionario.localtrabalho, 
    });
  }

  Cancelar() {
    this.form.reset();
    console.log('Cancelado');
  }

}
