import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  listeetudiant:any

  constructor(private  httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:9090/etudiant")
      .subscribe(data=> { this.listeetudiant=data;},
        err =>{console.log(err);}
      );
  }

}
