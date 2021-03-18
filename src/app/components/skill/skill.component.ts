import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  cvData: any[];
  skills: any[];

  constructor(private cvService : CvService) { }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(
      (data) => {
        this.cvData = data;
        this.skills = this.cvData['conocimientos'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
