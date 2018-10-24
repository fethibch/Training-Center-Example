import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "./model";

@Component({
  selector: 'app-modifetudiant',
  templateUrl: './modifetudiant.component.html',
  styleUrls: ['./modifetudiant.component.scss']
})
export class ModifetudiantComponent implements OnInit {
  etudiantlist:any
  etudiant:Etudiant=new Etudiant();
  etudiantrequete : any
  constructor(private  http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:9090/etudiant")
      .subscribe(data => {this.etudiantlist=data;},
      err => {console.log(err);});
  }
  deleteetudiant(c){

    this.http.delete('http://localhost:9090/etudiant/' + c.id).subscribe(data=>{
      window.location.reload();
    })
  }
  getItem(f){
    this.etudiantrequete = f;
  }

  OnUpdateetudiant(){
    const etudiantrequete = {
      id :this.etudiantrequete.id,
      nom: this.etudiant.name,
      prenom: this.etudiant.lastname,
      etude: this.etudiant.study,
      login: this.etudiant.login,
      pass: this.etudiant.pass,
      mail: this.etudiant.mail,
    }
    this.http.put('http://localhost:9090/etudiant', etudiantrequete).subscribe(data=>{
      window.location.reload();
    })
  }
}
