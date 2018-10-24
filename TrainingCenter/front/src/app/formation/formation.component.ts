import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  listeformation : any

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:9090/formation")
      .subscribe(data=> { this.listeformation=data;},
        err =>{console.log(err);}
      );
  }

}
