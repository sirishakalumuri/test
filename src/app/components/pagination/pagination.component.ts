import { Component, OnInit } from '@angular/core';
import { nextTick } from 'q';
import {HttpClient} from '@angular/common/http'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  initial = 0;
  end = 10;
  page = 0;
  pagelimit = 10;
  page_array = [];
  lastPage = 0;

  comments = [];

  constructor(private api : ApiService) { }

  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(
    //   (data:any[])=>{
    //     console.log(data);
    //     this.comments=data;
    //     this.lastPage = (this.comments.length / this.pagelimit) - 1;
    //     this.generatePageButtons();
    //   }
    // )
    this.api.get('comments').subscribe(
      (data:any[])=>{
        console.log(data);
        this.comments=data;
        this.lastPage = (this.comments.length / this.pagelimit) - 1;
        this.generatePageButtons();
      }
    )
  }
  // mostPrevious() {
  //   // this.initial = 0;
  //   // this.end = 10;
  //   this.setPage(0);
  // }
  // mostNext() {
  //   // this.initial = 490;
  //   // this.end = 500;
  //   this.setPage(99);
  // }
  // previous() {
  //   // this.initial = this.initial - 10;
  //   // this.end = this.end - 10;
  //   this.setPage(this.page - 1);
  // }
  // next() {
  //   // this.initial = this.initial + 10;
  //   // this.end = this.end + 10;
  //   this.setPage(this.page + 1);
  // }

  setPage(page) {
    this.page = page;
    this.initial = page * this.pagelimit;
    this.end = this.initial + this.pagelimit;
    this.generatePageButtons();
  }
  generatePageButtons() {
    this.page_array = [];
    for (let i = 0; i <= this.lastPage; i++) {

      // let conditionValueStart = this.page - 2;

      let conditionValueStart = Math.floor(this.page/5)*5;
      let conditionValueEnd =conditionValueStart+4;
      if (i >= conditionValueStart && i <= conditionValueEnd){
        this.page_array.push(i);
      }

    }
    console.log(this.page_array);
  }
  changePageLimit(){
    console.log(this.pagelimit);
    this.lastPage = (this.comments.length / this.pagelimit) - 1;
    this.setPage(0);
  }
}
