import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  constructor() { }
  displayContent = true;
  showMe = true;
  ngOnInit() {
  }
  onClick() {
    this.displayContent=!this.displayContent;
  }
  onShowClick(){
    this.showMe=!this.showMe
  }
}
