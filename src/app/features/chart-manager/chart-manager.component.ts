import {Component, OnInit} from '@angular/core';
import {AmazonScrapingService} from "../../services/amazon-scraping.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-chart-manager',
  templateUrl: './chart-manager.component.html',
  styleUrls: ['./chart-manager.component.scss']
})
export class ChartManagerComponent implements OnInit {
  constructor(private service: AmazonScrapingService) {
  }

  data: any;
  productList: Product[] = [];
  productSelected?: Product;

  ngOnInit() {
    this.service.getProductWithPrices().subscribe(res => this.data = res);
    this.service.getAllProducts().subscribe(res => {
      this.productList = res
      this.productSelected = res[0]
    });
  }
}
