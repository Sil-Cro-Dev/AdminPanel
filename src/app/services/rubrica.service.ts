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

  addFolks(folk: any) {
    folk = {
      "nome": "Silavno",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/398.jpg",
      "cognome": "PALONI",
      "numero": "12345789",
      "id": "5"
    }

    return this.http.post<any>(URL_MOCK + 'rubrica', JSON.stringify(folk), httpOptions);
  }


}
