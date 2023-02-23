import {Component, OnInit} from '@angular/core';
import {AmazonScrapingService} from "../../services/amazon-scraping.service";
import {Product} from "../../models/Product";
import {MatSelectChange} from "@angular/material/select";

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
    this.service.getAllProducts().subscribe(res => {
      this.productList = res
      this.productSelected = res[0]
      this.service.getProductWithPrices(res[0].id).subscribe(res => this.data = res);
    });

  }

  changeSelectedProduct($event: MatSelectChange) {
    this.service.getProductWithPrices($event.value).subscribe(res => {
      this.productSelected = res
      this.data = res
    })
  }
}
