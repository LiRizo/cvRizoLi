import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cv: any[];

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(
      (data) => {
        this.cv = data['data'];
        console.log("test", data);

      },
      (err) => {
        console.log(err);
      }
    );
  }

}
