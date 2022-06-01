import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Estudiante } from '../../interfaces/Estudiante.inteface';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crud-lista',
  templateUrl: './crud-lista.component.html',
  styleUrls: ['./crud-lista.component.css'],
  providers:[MessageService,ConfirmationService]
})
export class CrudListaComponent implements OnInit {

  agregar:boolean=false;
  edit:boolean=false;
  
 estudiantes:Estudiante[]=[
    {
      nombreCompleto:'Daniel',
      asistencia:true,
    }
  ]
  cloneStuden:Estudiante[]=[]
  cloneAsistencia:Estudiante[]=[]

  miFormulario:FormGroup=this.fb.group({
    nombreCompleto:['', [Validators.required]],
    asistencia:[false,]
  })
  constructor(private fb:FormBuilder,
              private cS:ConfirmationService) { }

  ngOnInit(): void {
  }

openNew(){
  this.agregar=true;
  this.edit=false
  this.miFormulario.reset();
}
confirmar(){
  this.agregar=false;
  const valores=this.miFormulario.value;
  this.estudiantes.push(valores);
  this.miFormulario.reset();
}
cancelar(){
  this.agregar=false;
  this.edit=false;
}
eliminarTodo(){
  this.cS.confirm({
    message: '¿Estás seguro de eliminar todos los estudiantes de la lista?',
    header: 'Confirmar',
    icon: 'pi pi-exclamation-triangle',
    accept:()=>{
      this.estudiantes=[];
    }
  })
  // console.log(err);
}
eliminar(index:number){
  this.cS.confirm({
    message: '¿Estás seguro que desea eliminar el estudiante de la lista?',
    header: 'Confirmar',
    icon: 'pi pi-exclamation-triangle',
    accept:()=>{
      this.estudiantes.splice(index,1)
    }
  })
}
editar(estudiante:any){
  this.agregar=false;
  this.edit=true;
  this.cloneStuden=estudiante.nombreCompleto
  this.cloneAsistencia=estudiante.asistencia;
}
confirmEdit(estudiante:any){
  this.edit=false;
  const valores = this.miFormulario.value
  this.estudiantes.values
  this.miFormulario.reset();
}
guardar(){

}
// exportPdf() {
//   import("jspdf").then(jsPDF => {
//       import("jspdf-autotable").then(x => {
//           const doc = new jsPDF.default();
//           autoTable(doc, {});
//           doc.save('Lista.pdf');
//       })
//   })
// }

}
