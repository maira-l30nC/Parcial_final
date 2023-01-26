import { EditComponent } from './../edit/edit.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import{ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  Personas: Persona=new Persona()S;
  constructor(private service:ServiceService, private router:Router){}
  ngOnInit(): void {
    throw Editar();
  }

  ngOnIntit() {
    this.service.getPersonas()
    .subscribe(data=>{
      this.Personas=data;
    })
  }
  Editar(Persona:Persona):void{
    localStorage.setItem("Id",Persona.Id.toString());
    this.router.navigate(["Edit"]);

  }

}


