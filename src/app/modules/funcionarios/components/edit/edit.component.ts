import { Funcionario } from './../../shared/funcionario.model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FuncionariosService } from '../../shared/services/funcionarios.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  funcForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(
    private funcionariosService: FuncionariosService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getFuncionario();
  }

  getFuncionario(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionariosService.get(id)
      .subscribe( f => this.createForm(f))
  }

  createForm(f: Funcionario){
    this.funcForm = new FormGroup({
      'name': new FormControl(f.name,[Validators.required, Validators.minLength(5)]),
      'email': new FormControl(f.email,[Validators.pattern(this.emailPattern)]),
      'tel': new FormControl(f.tel),
      'id': new FormControl(f.id),
    })
  }

  onSubmit(){
    const newFun = this.funcForm.value
    this.funcionariosService.update(newFun)
      .subscribe( _ => this.goBack())
  }

  goBack(){
    this.location.back();
  }

}
