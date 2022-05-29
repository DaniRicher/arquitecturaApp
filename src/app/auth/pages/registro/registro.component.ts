import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';

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
  
  constructor(private fb:FormBuilder,
              private validatorService:ValidatorsService) { }

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
    this.miFormulario.markAllAsTouched();
  }

}
