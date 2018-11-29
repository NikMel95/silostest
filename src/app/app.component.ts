import { Component, OnInit  } from '@angular/core';
import { SilosTowerAPI } from './api.service';
import { Indicator } from './indicator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'frontend';  
  towers: Indicator[];
  constructor(private apiService: SilosTowerAPI) { }

  ngOnInit() {
    this.getTowers();
  }

  public getTowers() {
    this.apiService.getTowers().subscribe((data: Indicator[]) => {
      this.towers = data;
    });
  }

  public formatNumbSpace(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  public getStatus(value, min, max) {
    if(value >= min && value <= max)
      return 'success';
    else if(value < min || value > max)
      return 'error';
  }

  public getPercentTower(value, min, max) {
    return value * 100/(max - min);
  }

  public getHeightIndicator(value, min, max) {
    if(value >= min && value <= max)
      return this.getPercentTower(value, min, max);
    else if(value > max)
      return 100; 
    else 
      return 0
  }
}
