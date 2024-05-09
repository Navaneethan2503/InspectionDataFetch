import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  dataInpections: any[] = [];

  constructor(private inspace: DataServiceService) { }

  ngOnInit() {
    this.inspace.getInspections().subscribe(
      (data) => {
        this.dataInpections = data;
        console.log("data", data);
      },
      (error) => {
        console.error("error Happened",error);
      }
    );
  }
}
