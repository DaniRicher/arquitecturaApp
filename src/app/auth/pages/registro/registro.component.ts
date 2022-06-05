import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [`
    .validoV{
      color: red;
    }
  `]
})
export class RegistroComponent implements OnInit {

   
  miFormulario:FormGroup=this.fb.group({
    rol:['', [Validators.required]],
    name:['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    codigo:['', [Validators.required]],
    password:['', [Validators.required]],
  });

  usuario={
    rol:''
  }
  
  constructor(private fb:FormBuilder,
              private validatorService:ValidatorsService,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched;
  }
  validarContrasena(contraseña:any){
    return this.miFormulario.get(contraseña)?.invalid
           && this.miFormulario.get(contraseña)?.touched;
  }

  campoNoValidoRol(campo:string){
    return this.miFormulario.get(campo)?.invalid;
  }

  submitFormulario(){
   
    const {rol, email, name, codigo, password} =this.miFormulario.value;

    this.authService.registro(rol, email, name, codigo, password)
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

}
