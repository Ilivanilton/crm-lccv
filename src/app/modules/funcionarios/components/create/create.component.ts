import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FuncionariosService } from '../../shared/services/funcionarios.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  funcForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(
    private funcionariosService: FuncionariosService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.funcForm = new FormGroup({
      'name': new FormControl('',[Validators.required, Validators.minLength(5)]),
      'email': new FormControl('',[Validators.pattern(this.emailPattern)]),
      'tel': new FormControl(''),
    })
  }

  onSubmit(){
    const newFun = this.funcForm.value
    this.funcionariosService.create(newFun)
      .subscribe( _ => this.goBack())
  }

  goBack(){
    this.location.back();
  }

}
