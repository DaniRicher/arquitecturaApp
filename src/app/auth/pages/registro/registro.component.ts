import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    rol:['E', [Validators.required]]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }



}
