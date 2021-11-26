import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(public http: HttpClient) { }

  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  private funcionariosUrl = 'http://localhost:3000/funcionarios'


  getAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.funcionariosUrl, this.httpOptions)
  }

  get(id: number): Observable<Funcionario>{
    let url = `${this.funcionariosUrl}/${id}`;
    return this.http.get<Funcionario>(url)
  }

  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.funcionariosUrl, funcionario, this.httpOptions)
  }

  delete(func: Funcionario | number): Observable<Funcionario>{
    const id = typeof func == 'number' ? func : func.id
    const url = `${this.funcionariosUrl}/${id}`;
    return this.http.delete<Funcionario>(url, this.httpOptions)
  }

  update(funcionario: Funcionario): Observable<any>{
    const url = `${this.funcionariosUrl}/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario,this.httpOptions);
  }



}
