import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
    private JumbotronHeading:string;
    private JumbotronText:string;
    private JumbotronBtnText:string;
    private JumbotronBtnUrl:string;

  constructor() {
      this.JumbotronHeading = 'Hello, world!';
      this.JumbotronBtnText = 'Learn more'
      this.JumbotronText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
      this.JumbotronBtnUrl = '#'
  }

  ngOnInit() {
  }

}
