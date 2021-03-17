import { Component, OnInit, Input } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  cvData: any[];

  cvDateObj;
  name: string;
  lastName: string;
  expertise: string;
  description: string;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(
      (data) => {
        this.cvData = data;
        console.log("test", this.cvData);
        this.name = this.cvData['nombre_completo'];
        this.lastName = this.cvData['apellidos'];
        this.expertise = this.cvData['especialidad'];
        this.description = this.cvData['descripcion'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
