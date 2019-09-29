import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupform: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.signupform = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      password: new FormControl(),
      resetpassword: new FormControl()
    })
  }
  signUp() {
    console.log('hi');
    // console.log(this.signupform);
    // console.log(this.signupform.value);
    // this.ht.post('https://jsonplaceholder.typicode.com/posts',this.signupform.value).subscribe(
    //   (data:  any)=>{
    //     console.log(data);
    //   }
    // );
    console.log('hi');
    // console.log(this.signupform);
    console.log(this.signupform.value);
    this.api.post('posts',this.signupform.value).subscribe(
      (data:  any)=>{
        console.log(data);
      }
    );
  }

}
