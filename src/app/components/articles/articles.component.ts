import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
title: any;
lang: any;
type: any;
thumbnailimg: Array<File> = [];
  constructor( private http: HttpClient) {}
  form = new FormGroup ({
    formModel: new FormControl(),
   });
  ngOnInit() {}

onSubmit() {
const resource = JSON.stringify(this.form.value.formModel);
console.log('Add Button clicked: ' + resource);
const resource1 = JSON.parse(resource);
console.log('sanduyyyyyyyyyyy Button clicked: ' + resource1.formModel);
const formData: any = new FormData();
const thumbfile: Array<File> = this.thumbnailimg;
for (let i = 0; i < thumbfile.length; i++) {
formData.append('thumbnail', thumbfile[i]);
}
formData.append('data', resource);
formData.append('title', this.title);
formData.append('contenttype', this.type);
formData.append('language', this.lang);
// formData.append('thumbnail', thumbfile);
this.http.post('http://192.168.1.14:8080/savecontent/', formData).subscribe();
      }
       Title(fileInput: any) {
        this.title = fileInput.target.value;
      }
      thumbnail(fileInput: any) {
        this.thumbnailimg = <Array<File>>fileInput.target.files;
      }
      contentType(fileInput: any) {
        this.type = fileInput.target.value;
      }
      language(fileInput: any) {
        this.lang = fileInput.target.value;
      }
}
