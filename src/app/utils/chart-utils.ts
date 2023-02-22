import {Axis, Chart, ColumnSeries, LegendPosition, LineSeries, XYChart} from "@amcharts/amcharts4/charts";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import {TimeUnit} from "@amcharts/amcharts4/core";

export class ChartUtilities {
  private static brightText = am4core.color("#d0d0d0");
  private static accent = am4core.color("#69f0ae");

  static getTitle(chart: Chart, titleText: string): any {
    let title = chart.titles.create();
    title.text = titleText;
    title.fontSize = 13;
    title.fill = this.accent;
    title.marginBottom = 10;
    return title;
  }

  static getValueOrDateAxisX(chart: XYChart, labelX: string, isTimestampX: boolean = false, timeUnit: TimeUnit = 'day'): any {
    let axisX: any;
    if (isTimestampX) {
      axisX = chart.xAxes.push(new am4charts.DateAxis());
      axisX.baseInterval = {
        "timeUnit": timeUnit,
        "count": 1
      };
    } else {
      axisX = chart.xAxes.push(new am4charts.ValueAxis());
    }
    ChartUtilities._setCommonAxisStyle(axisX, labelX);
    return axisX;
  }

  static getValueOrDateAxisY(chart: XYChart, labelY: string, isTimestampY: boolean = false, expandGridDistance = false): any {
    let axisY: any;
    if (isTimestampY) {
      axisY = chart.yAxes.push(new am4charts.DateAxis());
    } else {
      axisY = chart.yAxes.push(new am4charts.ValueAxis());
    }
    ChartUtilities._setCommonAxisStyle(axisY, labelY);
    if (expandGridDistance) {
      axisY.renderer.minGridDistance = 100;
    }
    return axisY;
  }

  private static _setCommonAxisStyle(axis: Axis, label: string) {
    axis.title.text = label;
    axis.title.fill = this.brightText;
    axis.renderer.labels.template.fill = this.brightText;
    axis.renderer.labels.template.fontSize = 11;
    axis.renderer.grid.template.stroke = this.brightText;
    axis.renderer.grid.template.strokeDasharray = "1,3";
    axis.renderer.opacity = 1;
    axis.renderer.minGridDistance = 30;
  }

  static getLabelBullet(series: LineSeries | ColumnSeries, labelSuffix: string = '', totalValue: boolean = false, reversed: boolean = false) {
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.dx = reversed ? -20 : 0;
    labelBullet.dy = reversed ? 0 : -10;
    let valueOrTotal = totalValue ? "total" : "value";
    let field = reversed ? "valueX" : "valueY";
    labelBullet.label.text = "{" + field + "." + valueOrTotal + ".formatNumber('###.00')}" + labelSuffix;
    labelBullet.label.fill = this.brightText;
    labelBullet.label.truncate = false;
    labelBullet.label.fontSize = 10;
    labelBullet.label.hideOversized = false;
    labelBullet.label.padding(5, 10, 5, 10);
  }

  static getLegend(chart: Chart, position: LegendPosition = 'right') {
    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fill = this.brightText;
    chart.legend.fontSize = 10;
    chart.legend.valueLabels.template.fill = this.brightText;
    chart.legend.labels.template.maxWidth = 120;
    chart.legend.labels.template.truncate = true;
    chart.legend.position = position;
    chart.legend.scrollable = true;
    chart.legend.useDefaultMarker = true;
    return chart.legend;
  }

  static getCursor(chart: XYChart) {
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomXY"
  }
}
