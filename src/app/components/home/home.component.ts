import { Component, OnInit, } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cvData: any[];
  aboutMe: any[];
  formation: any[];
  experience: any[];
  skill: any[];
  language: any[];

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(
      (data) => {
        this.cvData = data;
        console.log("test", this.cvData);
        this.aboutMe = this.cvData['sobre_mi'];
        this.formation = this.cvData['formacion'];
        this.experience = this.cvData['experiencia'];
        this.skill = this.cvData['conocimientos'];
        this.language = this.cvData['idioma'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
