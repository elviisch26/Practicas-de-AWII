import { Component } from '@angular/core';

import{InscripcionService } from '../../services/inscripcion.service'
import { IIncripciones, IIncripcion} from '../../interface/IInscripcion'

// Aspirante
import{AspiranteService } from '../../services/aspirante.service'
import { IAspirantes} from '../../interface/IAspirantes'
// Curso
import{CursoService } from '../../services/curso.service'
import { ICursos} from '../../interface/ICurso'
@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent {
  id: string='';
  //Incripciones
  datosIncripciones: IIncripciones = { sum:0, inscripciones:[]}
  //Curso
  datosCurso:ICursos = { sum:0, cursos:[] };
  titleCurso:string = 'Aspirantes';
  //Aspirante
  datosAspirantes:IAspirantes = { sum:0, aspirantes:[] };
  titleAspirante:string = 'Aspirantes';
  constructor(
    private aspiranteService: AspiranteService,
    private cursoService: CursoService,
    private inscrpcionService: InscripcionService
  ){

  }
  ngOnInit() {
    this.cargarAspirante();
    this.cargarCurso();
    this.cargarInscripcion();

  }
  envioInscripciones(value: IIncripcion){
    const id = this.id;
    let body:IIncripcion = {
      fecha:  value.fecha,
      hora: value.hora,
      valorCancelado: value.valorCancelado
    }
    this.inscrpcionService.postInscripcion(body)
    .subscribe(response => {
      console.log(response)
      this.ngOnInit();
    })
  }

  eliminarInscripcion(id: any){
    if (confirm('¿Estás seguro/a de que quieres eliminar este aspirante?')){
      this.cursoService.deleteCurso(id).subscribe((res) => {
        this.ngOnInit();
      });
    }
  }
  editarInscripcion(){

  }
  cargarCurso(){
    this.cursoService.getCurso()
    .subscribe(data => {
      this.datosCurso= data;
    });
  }
  cargarAspirante(){
    this.aspiranteService.getAspirante()
    .subscribe(data => {
      this.datosAspirantes= data;
    });
  }
  cargarInscripcion(){
    this.inscrpcionService.getInscripcion()
    .subscribe(data => {
      this.datosIncripciones= data;
    });
  }
} 


