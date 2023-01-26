import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{


  constructor(private ServiceService: { getPersonaId: (arg0: string) => { (): any; new(): any; this: { (): any; new(): any; service: { (): any; new(): any; function: { (): any; new(): any; subscribe: { (arg0: (data: any) => void): void; new(): any; }; }; }; }; }; }){}

  ngOnInit(): void {
    this.Editar();
 }

Editar(){
  let Id=localStorage.getItem("Id");
  this.ServiceService.getPersonaId("+Id").this.service.function
    .subscribe((data: any)=> {this.Persona=data});

}
}
