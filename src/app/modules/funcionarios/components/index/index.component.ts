import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../shared/funcionario.model';
import { FuncionariosService } from '../../shared/services/funcionarios.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit(): void {
    this.funcionariosService.getAll()
      .subscribe( f => this.funcionarios = f)
  }

}
