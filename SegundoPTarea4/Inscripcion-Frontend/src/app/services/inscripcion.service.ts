import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIncripcion, IIncripciones} from '../interface/IInscripcion'


@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private baseURL = `http://localhost:3500/v1/inventory/api`

  constructor(private http: HttpClient) { }


  getInscripcion(): Observable<IIncripciones> {
    return this.http.get<IIncripciones>(`${this.baseURL}/inscripcion`)
  }
  postInscripcion(data: any): Observable<IIncripcion> {
    return this.http.post<IIncripcion>(`${this.baseURL}/inscripcion`, data)
  }
  updateInscripcion(  id: string,data: any): Observable<IIncripcion> {
    return this.http.put<IIncripcion>(`${this.baseURL}/inscripcion/${id}`, data)
  }
  deleteInscripcion(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/inscripcion/${id}`)
}
}

