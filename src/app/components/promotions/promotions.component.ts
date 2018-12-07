import { Component, OnInit } from '@angular/core';

import {  FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  title: any;
  signupform: FormGroup;
  submitted = false;
  file: any;
  heading: any;

  type: any;
lang: any;
  filesToUpload: Array<File> = [];
  constructor( private http: HttpClient) { }

  ngOnInit() {
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    console.log(files);
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
      formData.append('contenttype', this.type);
      formData.append('title', this.title);
      formData.append('language', this.lang);

    }
    // formData.append('heading', this.heading );
    console.log('form data variable :   ' + formData.toString());
    this.http.post('http://192.168.1.14:8080/savepromotions', formData) .subscribe(file => console.log('file', file));

}
fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;

}

contenttype(fileInput: any) {
  this.type = fileInput.target.value;

}
language(fileInput: any) {
  this.lang = fileInput.target.value;

}
fileChangeEvent2(fileInput: any) {
  this.title = fileInput.target.value;

}
onSubmit() {
  this.submitted = true;
  this.upload();
}

}
