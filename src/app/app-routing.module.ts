import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'estudiante',
    loadChildren:()=> import('./estudiante/estudiante.module').then(m=>m.EstudianteModule),
    canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'docente',
    loadChildren:()=> import('./docente/docente.module').then(m=>m.DocenteModule),
    canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
