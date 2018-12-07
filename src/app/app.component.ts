import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'cinema143Admin';
  signupform: FormGroup;
  submitted = false;
  file: any;
  heading: any;
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
      // formData.append('uploads[]', files[i], files[i]['img']);
    }
    formData.append('heading', this.heading );
    console.log('form data variable :   ' + formData.toString());
    this.http.post('http://192.168.1.9:8080/savedata', formData) .subscribe(file => console.log('file', file));
    // this.http.post('http://103.92.235.108:8080/portfolioimg/create', formData)
    // .subscribe(data => console.log(data), error => console.log(error));
}
fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;

}
fileChangeEvent1(fileInput: any) {
  this.heading = fileInput.target.value;

}
// save() {
//   this.portfolioService.createtext(this.portfolio)
//     .subscribe(data => console.log(data), error => console.log(error));

// }

onSubmit() {
  this.submitted = true;
  this.upload();
}
}
