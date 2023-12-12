import { Injectable } from '@angular/core';
import { Idepartamento } from './idepartamento';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private readonly  API = "http://localhost:8080/departamentos";

  constructor(private http: HttpClient) { }

  listar(){
    // O atributo <Icursos[]> serve para parametrizar o retorno da classe
    return this.http.get<Idepartamento[]>(this.API);
  }


  listarPorId(id:object) {
    return this.http.get<Idepartamento>(`${this.API}/${id}`).pipe(take(1));
  }

  criar(departamento:object) {
    // o pipe take 1 serve para ir apenas umas vez no servidor e voltar.
    return this.http.post(this.API, departamento).pipe(take(1));
  }

  atualizar(departamento:any){
    return this.http.put(`${this.API}/${departamento.id}`, departamento).pipe(take(1));
  }

  excluir(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
