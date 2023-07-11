import { Component } from '@angular/core';
import {AspiranteService} from '../../services/aspirante.service'
import {IAspirante,IAspirantes} from '../../interface/IAspirantes'

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styleUrls: ['./aspirante.component.css']
})
export class AspiranteComponent {
  datosAspirantes:IAspirantes = { sum:0, aspirantes:[] };
  title:string = 'Aspirantes';

  constructor(
    private aspiranteService: AspiranteService
  ) { 
    
  }
  ngOnInit() {
    this.cargarAspirante();
 }
  envioAspirantes(value: IAspirante){
    let body:IAspirante = {
      nombre: value.nombre,
      identificacion: value.identificacion
    }
    this.aspiranteService.postAspirante(body)
    .subscribe(response => {
      console.log(response)
      this.cargarAspirante();
    })
  }
  cargarAspirante(){
    this.aspiranteService.getAspirante()
    .subscribe(data => {
      this.datosAspirantes= data;
    });
  }
  eliminarAspirante(id: any){
    if (confirm('¿Estás seguro/a de que quieres eliminar este aspirante?')){
      this.aspiranteService.deleteAspirante(id).subscribe((res) => {
        this.cargarAspirante();
      });
    }
  }
   editarAspirante(id: string, datosActualizados: any) {
    this.cargarAspirante = datosActualizados;
    this.aspiranteService.updateAspirante(id, datosActualizados)
    .subscribe(data => {
      console.log(data); 
    });
}
}  

