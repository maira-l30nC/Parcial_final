import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  per:Persona = new Persona();
  constructor(private router:Router, private service:ServiceService) { }


  ngOnInit():void {
  }

  Guardar(Persona:Persona){

    this.service.createPersona(this.per)
    .subscribe(data=>{
      alert("Se agrego con Exito..");
      this.router.navigate(["Listar"]);
    })
  }


}
