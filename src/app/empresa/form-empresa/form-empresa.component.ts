import { Component, OnInit } from '@angular/core';
import { Iempresa } from '../service/iempresa';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpresaService } from '../service/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import{map, switchMap} from 'rxjs';
@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss']
})
export class FormEmpresaComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cnpj: new FormControl(' '),
    endereco: new FormControl(' '),
    socios: new FormControl(''),
    faturamento: new FormControl(''),
  })

  constructor(
    private service: EmpresaService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() { this.ListarPorId(); }

  Salvar() {
    if (this.form.value.id) {
      this.service.atualizar(this.form.value).subscribe(
        success => {
          alert("Empresa atualizada com sucesso!");
          this.router.navigate(['empresa']);
        },
        error => alert("Erro ao atualizar a Empresa ")
      );
    } else {
      this.service.criar(this.form.value).subscribe(
        success => {
          alert("Empresa cadastrada com sucesso!");
          this.router.navigate(['empresa']);
        },
        error => alert("Erro ao cadastrar a Empresa ")
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
      .subscribe(empresa => this.atualizarForm(empresa));
  }

  atualizarForm(empresa: Iempresa) {
    this.form.patchValue({
      id: empresa.id,
      nome: empresa.nome,
      cnpj: empresa.cnpj,
      endereco: empresa.endereco,
      socios: empresa.socios,
      faturamento: empresa.faturamento,
    });
  }

  Cancelar() {
    this.form.reset();
    console.log('Cancelado');
  } 
}
