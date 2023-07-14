import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { CursoComponent } from './components/curso/curso.component';
import { AspiranteComponent } from './components/aspirante/aspirante.component';

const routes: Routes = [
  { path: '', redirectTo: 'inscripcion', pathMatch: 'full' },
  { path: 'inscripcion', component:  InscripcionComponent},
  { path: 'curso', component:  CursoComponent},
  { path: 'aspirante', component:  AspiranteComponent},
  { path: '**', redirectTo: 'inscripcion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
