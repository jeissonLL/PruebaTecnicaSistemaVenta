import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {

  private urlApi:string = environment.endpoint + "Auditoria/";

  constructor(private http:HttpClient) { }

   lista():Observable<ResponseApi>{
      return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
    }
}
