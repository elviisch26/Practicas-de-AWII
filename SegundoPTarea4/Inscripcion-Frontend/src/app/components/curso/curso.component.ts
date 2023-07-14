import { Component } from '@angular/core';
import { CursoService} from '../../services/curso.service'
import {ICurso, ICursos } from '../../interface/ICurso'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  datosCurso:ICursos = { sum:0, cursos:[] };
  title:string = 'Aspirantes';

  constructor(
    private cursoService: CursoService
  ) { 
    
  }
  ngOnInit() {
    this.cargarCurso();
 }
   cargarCurso(){
    this.cursoService.getCurso()
    .subscribe(data => {
      this.datosCurso= data;
    });
  }
   envioCursos(value: ICurso){
    let body:ICurso = {
      descripcion:  value.descripcion,
      fechaInicio: value.fechaInicio
    }
    this.cursoService.postCurso(body)
    .subscribe(response => {
      console.log(response)
      this.cargarCurso();
    })
  }

  eliminarCurso(id: any){
    if (confirm('¿Estás seguro/a de que quieres eliminar este aspirante?')){
      this.cursoService.deleteCurso(id).subscribe((res) => {
        this.cargarCurso();
      });
    }
  }
  editarCurso(){

  }

}
