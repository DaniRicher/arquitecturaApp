import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Estudiante } from '../../interfaces/Estudiante.inteface';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-crud-lista',
  templateUrl: './crud-lista.component.html',
  styleUrls: ['./crud-lista.component.css'],
  providers:[MessageService]
})
export class CrudListaComponent implements OnInit {

  selectedProducts:string[]=[];

  selectedValues:string[]=[]

  exportColumns: any[]=[];

  estudiantes:Estudiante[]=[
    {
      nombreCompleto:'Daniel'
    }
  ]


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}
openNew(){

}
deleteSelectedProducts(){

}
abrirLista(){

}
exportPdf() {
  import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
          const doc = new jsPDF.default();
          autoTable(doc, {});
          doc.save('Lista.pdf');
      })
  })
}

}
