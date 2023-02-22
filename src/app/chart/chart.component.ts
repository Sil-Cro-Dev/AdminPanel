import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {Product, ProductPrice} from "../models/Product";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {ChartUtilities} from "../utils/chart-utils";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnChanges, OnDestroy {

  @Input() data!: Product;
  dataChart: ProductPrice[] = [];


  ngOnChanges(changes: SimpleChanges) {
    if (changes["data"] && changes["data"].currentValue) {
      this.dataChart = this.data.productPriceSet
      console.log(this.dataChart)
      this.initChart(false);
    }
  }

  initChart(destroy: boolean) {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    if (destroy) {
      chart.dispose();
      return;
    }

    ChartUtilities.getTitle(chart, "Amazon-Scraping-Data")


    let xAxis = ChartUtilities.getValueOrDateAxisX(chart, "Update Date", true);
    let yAxis = ChartUtilities.getValueOrDateAxisY(chart, "Product Price", false);


    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "updateDate";
    series.dataFields.valueY = "productPrice";
    series.stroke = am4core.color("#69f0ae");

    chart.cursor = new am4charts.XYCursor();
    chart.data = this.dataChart

    ChartUtilities.getCursor(chart);
    ChartUtilities.getLabelBullet(series);

  }

  ngOnDestroy(): void {
    this.initChart(true);
  }


  private static getPattern(range: boolean) {
    var pattern = new am4core.LinePattern();
    pattern.width = 10;
    pattern.height = 10;
    pattern.strokeWidth = 1;
    if (range) {
      pattern.rotation = 45;
    } else {
      pattern.rotation = -45;
    }
    return pattern;
  }

}
