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


}
