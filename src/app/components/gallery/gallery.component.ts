import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Gallery } from './gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: Gallery  = new Gallery();
  signupform: FormGroup;
  submitted = false;
  file: any;
  title: string;
  Arrayimages: Array<File> = [];
  thumbimg: Array<File> = [];
  lang: any;


  constructor( private http: HttpClient) { }

  ngOnInit() {
  }

  upload() {
    const formData: any = new FormData();
    const imagefiles: Array<File> = this.Arrayimages;
    const thumbfile: Array<File> = this.thumbimg;
    console.log(imagefiles);
    for (let i = 0; i < imagefiles.length; i++) {
      formData.append('imagefiles', imagefiles[i]);
    }
    formData.append('thumbfile', thumbfile[0]);
    formData.append('title', this.title );
    formData.append('language', this.lang );
    console.log('form data variable :   ' + formData.toString());
    this.http.post('http://192.168.1.14:8080/savegallery', formData) .subscribe(file => console.log('file', file));
}
Images(fileInput: any) {
  this.Arrayimages = <Array<File>>fileInput.target.files;

}
thumbImages(fileInput: any) {
  this.thumbimg = <Array<File>>fileInput.target.files;

}
Title(fileInput: any) {
  this.title = fileInput.target.value;

}

language(fileInput: any) {
  this.lang = fileInput.target.value;

}
onSubmit() {
  this.submitted = true;
  this.upload();
}

}
