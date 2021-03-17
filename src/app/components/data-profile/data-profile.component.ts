import { Component, OnInit, Input } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css']
})
export class DataProfileComponent implements OnInit {

  cvData: any[];
  mail: any[];
  github: string;
  number: number;
  linkedin: any[];

  constructor(private cvService : CvService) { }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(
      (data) => {
        this.cvData = data;
        this.mail = this.cvData['correo'];
        this.github = this.cvData['github'];
        this.number = this.cvData['numero'];
        this.linkedin = this.cvData['linkedin'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
