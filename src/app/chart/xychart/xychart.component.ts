import {AfterViewInit, Component, Input, OnInit} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {ProductPrice} from "../../models/Product";

@Component({
  selector: 'ap-xychart',
  templateUrl: './xychart.component.html',
  styleUrls: ['./xychart.component.scss']
})
export class XychartComponent implements OnInit, AfterViewInit {

  @Input() data!: ProductPrice[];

  constructor() {
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeChart()
  }

  initializeChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    let dateAxist = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    dateAxist.dataFields.data = "updateDate";
    dateAxist.title.text = "DATA PRELIEVO";

    valueAxis.dataFields.data = "productPrice"
    valueAxis.title.text = "EUR";

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "productPrice";
    series.dataFields.dateX = "updateDate";

    chart.cursor = new am4charts.XYCursor();

    series.data = this.data
  }


}

