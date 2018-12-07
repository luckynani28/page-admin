import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Videos } from './videos';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
videos: Videos  = new Videos();
type: any;
url: any;
title: any;
alter: any;
lang: any;
constructor( private http: HttpClient) { }

form = new FormGroup ({
  formModel: new FormControl(),
 });

ngOnInit() {
  }

onSubmit() {
const formData: any = new FormData();
formData.append('videourl', this.url);
formData.append('alternatetext', this.alter);
formData.append('title', this.title);
formData.append('contenttype', this.type);
formData.append('language', this.lang);
this.http.post('http://192.168.1.14:8080/savevideos/', formData).subscribe();
}
Title(fileInput: any) {
this.title = fileInput.target.value;
 }
 VideoUrl(fileInput: any) {
this.url = fileInput.target.value;
}
AlternateText(fileInput: any) {
this.alter = fileInput.target.value;
}
ContentType(fileInput: any) {
  this.type = fileInput.target.value;
}
language(fileInput: any) {
    this.lang = fileInput.target.value;

  }
}
