import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  cvData: any[];
  experiences: any[];

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(
      (data) => {
        this.cvData = data;
        this.experiences = this.cvData['experiencia'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
