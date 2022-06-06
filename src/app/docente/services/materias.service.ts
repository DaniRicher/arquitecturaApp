import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Materia } from '../interfaces/materia.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private baseUrl:string =environment.baseUrl;
  private _materia!:any;

  get materia(){
    return {...this._materia};
  }

  constructor(private http:HttpClient) { }

  materias(){
    const url=`${this.baseUrl}/materias`;
    return this.http.get(url)
    .pipe(
      tap((ok)=>{
        console.log(ok);
        
      }),
    );
  }

  
}
