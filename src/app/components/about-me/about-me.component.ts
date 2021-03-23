import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  @Input() aboutMe: any[];

  constructor() { }

  ngOnInit(): void {

  }

}
