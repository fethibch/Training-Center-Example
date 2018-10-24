import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Formation} from "./model";
import {Sign} from "../../signup/signup.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-modif-formation',
  templateUrl: './modif-formation.component.html',
  styleUrls: ['./modif-formation.component.scss']
})
export class ModifFormationComponent implements OnInit {
  formationlist : any
formation : any
  ajoutfor:Formation= new Formation();


  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:9090/formation")
      .subscribe(data=> { this.formationlist=data;},
        err =>{console.log(err);}
      );
  }

  deleteformation(c){

    this.httpClient.delete('http://localhost:9090/formation/' + c.id).subscribe(data=>{
      window.location.reload();
    })
  }


  getItem(f){
    this.formation = f;
  }

  OnUpdateFormation(){
    const formation = {
      id :this.formation.id,
      name : this.ajoutfor.name,
      description : this.ajoutfor.description
    }
    this.httpClient.put('http://localhost:9090/formation', formation).subscribe(data=>{
      window.location.reload();
    })
  }

  addformation () {
    const ajoutfor=this.ajoutfor
    return this.httpClient.post("http://localhost:9090/formation",ajoutfor).subscribe(data=>{
      window.location.reload();
    })
  }


}

