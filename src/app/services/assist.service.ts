import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AssistService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(environment.apiUrl.concat("/assist"));
  }
}
