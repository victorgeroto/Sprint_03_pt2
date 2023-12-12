import { Component, OnInit } from '@angular/core';
import { Iclientes } from '../service/iclientes';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from '../service/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.scss']
})
export class FormClientesComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cpf: new FormControl(''),
    rg: new FormControl(''),
    endereco: new FormControl(''),
    email: new FormControl(''),
  })

  constructor(
    private service: ClientesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { this.ListarPorId(); }

  Salvar() {
    if (this.form.value.id) {
      this.service.atualizar(this.form.value).subscribe(
        success => {
          alert("Cliente atualizado com sucesso!");
          this.router.navigate(['clientes']);
        },
        error => alert("Erro ao atualizar o cliente ")
      );
    } else {
      this.service.criar(this.form.value).subscribe(
        success => {
          alert("Cliente cadastrado com sucesso!");
          this.router.navigate(['clientes']);
        },
        error => alert("Erro ao cadastrar o cliente ")
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
      .subscribe(clientes => this.atualizarForm(clientes));
  }

  atualizarForm(clientes: Iclientes) {
    this.form.patchValue({
      id: clientes.id,
      nome: clientes.nome,
      cpf: clientes.cpf,
      rg: clientes.rg,
      endereco: clientes.endereco,
      email: clientes.email,
    });
  }

  Cancelar() {
    this.form.reset();
    console.log('Cancelado');
  }
}
