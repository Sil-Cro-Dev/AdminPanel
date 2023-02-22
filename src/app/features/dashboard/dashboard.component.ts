import {Component, OnInit} from '@angular/core';
import {AmazonScrapingService} from "../../services/amazon-scraping.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private service: AmazonScrapingService) {
  }

  data: any;

  ngOnInit() {
    this.service.getProductWithPrices().subscribe(res => this.data = res);
  }


}


