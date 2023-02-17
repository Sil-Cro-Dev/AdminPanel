import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_MOCK} from "../../assets/Links";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  constructor(private http: HttpClient) {
  }

  getFolks(): Observable<any> {
    return this.http.get(URL_MOCK + 'rubrica',)
  }


}
