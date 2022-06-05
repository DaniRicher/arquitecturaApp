import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    rol:['', [Validators.required]],
    codigo:[, [Validators.required]],
    password:['', [Validators.required, Validators.minLength(6)]]
  });

  usuario={
    rol:'',
  }

  constructor(private fb:FormBuilder,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {

  }

  login(){

    const {codigo, password, rol}=this.miFormulario.value

    this.authService.login(codigo, password, rol)
      .subscribe(ok=>{
        if(ok===true){
          if(rol==='E'){
            this.router.navigateByUrl('/estudiante');
          }else if(rol==='D'){
            this.router.navigateByUrl('/docente');
          }
        }else{
          Swal.fire('Error', ok, 'error' );
        }
      });
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
