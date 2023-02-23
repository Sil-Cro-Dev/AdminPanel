import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_LOCAL} from "../../assets/Links";
import {Product} from "../models/Product";
import {Observable} from "rxjs";
import {PropertyNameUpgradeData} from "@angular/cdk/schematics";


@Injectable({
  providedIn: 'root'
})
export class AmazonScrapingService {

  priceUrl: string = "api/price"

  constructor(private http: HttpClient) {
  }

  getProductWithPrices(): Observable<Product> {
    return this.http.get<Product>(URL_LOCAL + this.priceUrl + "/1")
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(URL_LOCAL + this.priceUrl + "/all")
  }

}
