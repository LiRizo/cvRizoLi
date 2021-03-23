import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css']
})
export class DataProfileComponent implements OnInit {

  @Input() aboutMe: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
