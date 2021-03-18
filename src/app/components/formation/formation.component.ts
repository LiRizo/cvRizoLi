import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  cvData: any[];
  formations: any[];

  constructor(private cvService : CvService) { }


  ngOnInit(): void {
    this.cvService.getCv().subscribe(
      (data) => {
        this.cvData = data;
        this.formations = this.cvData['formacion'];

      },
      (err) => {
        console.log(err);
      }
    );
  }

}
