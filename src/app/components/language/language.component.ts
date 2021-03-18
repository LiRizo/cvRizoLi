import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

cvData: any[];
languages: any[];

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(
      (data) => {
        this.cvData = data;
        this.languages = this.cvData['idioma'];

      },
      (err) => {
        console.log(err);
      }
    );
  }

}
