import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
 selector: 'app-series-list',
 templateUrl: './series-list.component.html',
 styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

 series: Array<Series> = [];
 average: string = '';

 constructor(private seriesService: SeriesService) { }

 getSeries(): void {
   this.seriesService.getSeries().subscribe((series) => {
    let total = 0;
      series.forEach((s) => {
        total += s.seasons;
      });
      let average = total / series.length;
      this.series = series;
      this.average = 'Seasons average: ' + average;
    });
  }
  
  ngOnInit() {
    this.getSeries();
  }
}


