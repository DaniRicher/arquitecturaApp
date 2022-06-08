import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Estudiante } from '../../interfaces/Estudiante.inteface';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-crud-lista',
  templateUrl: './crud-lista.component.html',
  styleUrls: ['./crud-lista.component.css'],
  providers:[MessageService,ConfirmationService]
})
export class CrudListaComponent implements OnInit {

  agregar:boolean=false;
  edit:boolean=false;
  name:string='';
  confirm:boolean=true;

  cols: any[]=[];
  exportColumns: any[]=[];
  
  
 estudiantes:Estudiante[]=[
    {
      nombreCompleto:'Daniel Alvarado',
      asistencia:true,
    },
    {
      nombreCompleto:'Enrique Arevalo',
      asistencia:true,
    },
    {
      nombreCompleto:'Andres Martinez',
      asistencia:true,
    },
    {
      nombreCompleto:'Carlos Muñoz',
      asistencia:true,
    },
    {
      nombreCompleto:'Carlos Alvarez',
      asistencia:true,
    },
  ]
  cloneStuden:Estudiante[]=[]
  cloneAsistencia:Estudiante[]=[]

  miFormulario:FormGroup=this.fb.group({
    nombreCompleto:['', [Validators.required]],
    asistencia:[false,]
  })
  constructor(private fb:FormBuilder,
              private cS:ConfirmationService,
              private authService:AuthService) { }

  ngOnInit(): void {

  }
  exportPdf() {
    
    // import("jspdf").then(jsPDF => {
    //     import("jspdf-autotable").then(x => {
    //         const doc = new jsPDF.default(0,0);
    //         doc.autoTable(this.exportColumns, this.cloneAsistencia);
    //         doc.save('Lista.pdf');
    //     })
    // })
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
  // this.confirm=true;
  this.cS.confirm({
    message: '¿Estás seguro que desea eliminar el estudiante de la lista?',
    header: 'Confirmar',
    icon: 'pi pi-exclamation-triangle',
    accept:()=>{
      this.estudiantes.splice(index,1);
      this.confirm=false;
    },reject:()=>{
      this.confirm=false;
    }
    
  })
  this.confirm=true;
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


}
