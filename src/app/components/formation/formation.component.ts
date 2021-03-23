import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  @Input() formation: any[];

  constructor() { }


  ngOnInit(): void {
  }

}
