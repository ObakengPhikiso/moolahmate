import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "apps/client-auth/src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
    constructor(private http: HttpClient){}

    getData() {
        return this.http.get(environment.baseUrl)
    }
  }