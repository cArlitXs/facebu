import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiUrl.concat("/users");

  findById(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  getAllUsers() {
    return this.http.get(this.url);
  }
}
