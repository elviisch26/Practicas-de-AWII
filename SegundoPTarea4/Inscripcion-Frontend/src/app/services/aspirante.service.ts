import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAspirante, IAspirantes} from '../interface/IAspirantes'

@Injectable({
  providedIn: 'root'
})
export class AspiranteService {

  private baseURL = `http://localhost:3500/v1/inventory/api`

  constructor(private http: HttpClient) { }


  getAspirante(): Observable<IAspirantes> {
    return this.http.get<IAspirantes>(`${this.baseURL}/aspirante`)
  }
  postAspirante(data: any): Observable<IAspirante> {
    return this.http.post<IAspirante>(`${this.baseURL}/aspirante`, data)
  }
  updateAspirante( data: any ,id: string): Observable<IAspirante> {
    return this.http.put<IAspirante>(`${this.baseURL}/aspirante/${id}`, data)
  }
  deleteAspirante(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/aspirante/${id}`)
}
}
