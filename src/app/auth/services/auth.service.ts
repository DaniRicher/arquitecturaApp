import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http:HttpClient) {}

  registro(rol:string, email:string, name:string, codigo:number, password:string){

    const url=`${this.baseUrl}/auth/new`;
    const body={rol, email, name, codigo, password};

    return this.http.post<AuthResponse>(url, body)
     .pipe(
       tap(resp=>{
        if(resp.ok){
          localStorage.setItem('token', resp.token!)
          this._usuario={
            name:resp.name!,
            uid:resp.uid!
          }
        }
       }),
       map(resp=> resp.ok),
       catchError(err=> of(err.error.msg)),
     );
  }

  login(codigo:number, password:string, rol:string){

    const url=`${this.baseUrl}/auth`;
    const body={codigo, password, rol};

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(resp=>{
        if(resp.ok){
          localStorage.setItem('token', resp.token!)
          this._usuario={
            name:resp.name!,
            uid:resp.uid!
          }
        }
      }),
      map(resp=> resp.ok),
      catchError(err=> of(err.error.msg)),
    );
  }


  validarToken():Observable<boolean>{

    const url=`${this.baseUrl}/auth/renew`;

    const headers=new HttpHeaders()
        .set ('x-token',localStorage.getItem('token')||'')

    return this.http.get<AuthResponse>(url,{headers})
      .pipe(
        map(resp=>{
          localStorage.setItem('token', resp.token!)
          this._usuario={
            name:resp.name!,
            uid:resp.uid!
          }
          return resp.ok;
        }),
        catchError(err=>of(false))
      );
  }

  logout(){
    localStorage.clear();
  }
}