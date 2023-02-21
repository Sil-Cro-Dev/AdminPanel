import {Component, OnInit} from '@angular/core';
import {AmazonScrapingService} from "../../services/amazon-scraping.service";
import {ProductPrice} from "../../models/Product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private amaoznScrapingService: AmazonScrapingService) {
  }

  data!: ProductPrice[];

  ngOnInit(): void {
    this.amaoznScrapingService.getProductWithPrices().subscribe(res => {
      if (res.productPriceSet)
        this.data = res.productPriceSet
    })
  }

}


