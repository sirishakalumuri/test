import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language='tamil';
  constructor() { 
    if(localStorage.getItem('language')){
      this.language=localStorage.getItem('language');
    }     
  }

  ngOnInit() {
  }
  changeLanguage(){
    localStorage.setItem('language',this.language);
    window.location.reload();
  }

}
