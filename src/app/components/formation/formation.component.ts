import { Component, Input, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  @Input() formation: any[];

  constructor(private cvService: CvService) { }


  ngOnInit(): void {
  }

}
