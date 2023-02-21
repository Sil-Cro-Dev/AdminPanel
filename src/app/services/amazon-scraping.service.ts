import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_LOCAL} from "../../assets/Links";
import {Product} from "../models/Product";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AmazonScrapingService {


  constructor(private http: HttpClient) {
  }

  getProductWithPrices(): Observable<Product> {
    return this.http.get<Product>(URL_LOCAL + "api/price/1",)
  }

}
