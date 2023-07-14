import { Component } from '@angular/core';
import {AspiranteService} from '../../services/aspirante.service'
import {IAspirante,IAspirantes} from '../../interface/IAspirantes'

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styleUrls: ['./aspirante.component.css']
})
export class AspiranteComponent {
  id: string='';

  datosAspirantes:IAspirantes = { sum:0, aspirantes:[] };
  title:string = 'Aspirantes';

  constructor(
    private aspiranteService: AspiranteService
  ) { 
    
  }
  ngOnInit() {
    this.cargarAspirante();
 }
 envioAspirantes(value: IAspirante) {
  const id = this.id;
  let body: IAspirante = {
    nombre: value.nombre,
    identificacion: value.identificacion
  };

  if (id.trim().length === 0) {
    this.aspiranteService.postAspirante(body)
      .subscribe(response => {
        console.log(response);
        this.cargarAspirante();
      });
  } else {
    this.actualizarAspirante(body, id);
  }
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
  actualizarAspirante(body: IAspirante, id: string) {
    this.aspiranteService.updateAspirante(body, id)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      });
}  

}