import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurso, ICursos } from '../interface/ICurso'

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseURL = `http://localhost:3500/v1/inventory/api`
  
  constructor(private http: HttpClient) { }


  getCurso(): Observable<ICursos> {
    return this.http.get<ICursos>(`${this.baseURL}/curso`)
  }
  postCurso(data: any): Observable<ICurso> {
    return this.http.post<ICurso>(`${this.baseURL}/curso`, data)
  }
  updateCurso( data: any ,id: string): Observable<ICurso> {
    return this.http.put<ICurso>(`${this.baseURL}/curso/${id}`, data)
  }
  deleteCurso(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/curso/${id}`)
}
}
