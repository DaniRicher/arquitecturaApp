import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    rol:['', [Validators.required]],
    codigo:[, [Validators.required]],
    password:['', [Validators.required]]
  });

  usuario={
    rol:'',
  }

  constructor(private fb:FormBuilder,
              private routes:Router) { }

  ngOnInit(): void {
    // this.miFormulario.reset({
    //   rol:'E',
    //   codigo: 1,
    //   password: 123,
    // });
  }

  login(){
    const formvalue={...this.miFormulario.value}
    this.usuario=formvalue;
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
    }else if(this.usuario.rol==='E'){
      this.routes.navigate(['./estudiante']);
    }else if(this.usuario.rol==='D'){
      this.routes.navigate(['./docente']);
    }
  }
  validarContrasena(contraseña:any){
    return this.miFormulario.get(contraseña)?.invalid
           && this.miFormulario.get(contraseña)?.touched;
  }
  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched;
  }
  campoNoValidoRol(campo:string){
    return this.miFormulario.get(campo)?.invalid;
  }
}
