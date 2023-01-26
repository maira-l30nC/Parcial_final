import { Persona } from '../Modelo/Persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/Parcial_final/Persona';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(Persona:Persona){
    return this.http.post<Persona>(this.Url,Persona);
  }
  getPersonaId(Id:number){
    return this.http.get<Persona>(this.Url+"/+Id");
  }
  updatePersona(Persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+Persona.Id,Persona);
  }

}
