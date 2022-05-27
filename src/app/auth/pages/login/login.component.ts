import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    rol:['E', [Validators.required]]
  });

  usuario={
    rol:'E'
  }

  constructor(private fb:FormBuilder,
              private routes:Router) { }

  ngOnInit(): void {
    this.miFormulario.reset({...this.usuario});
  }

  login(){
    const formvalue={...this.miFormulario.value}
    this.usuario=formvalue;
    if(this.usuario.rol==='E'){
      this.routes.navigate(['./estudiante']);
    }else{
      this.routes.navigate(['./docente']);
    }
  }
}
