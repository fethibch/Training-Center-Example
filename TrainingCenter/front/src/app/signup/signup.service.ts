import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sign} from "./signup.model";
import {map,catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {}

    signup (sign : Sign) {
      return this.http.post("http://localhost:9090/etudiant",sign)
        .pipe(
        map((resp :Response)=> resp.json()));
    }
  }

