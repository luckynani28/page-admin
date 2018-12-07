import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewgallery',
  templateUrl: './viewgallery.component.html',
  styleUrls: ['./viewgallery.component.css']
})
export class ViewgalleryComponent implements OnInit {
  constructor( private http: HttpClient, private serviceService: ServiceService) { }
  p = 1;

  isActive: true;
  totalcount: any;

  count: any;
  listgallery: any;
  submitted = false;
  file: any;
  check: any;
  checknext: any;
  title: string;
  Arrayimages: Array<File> = [];
  thumbimg: Array<File> = [];
  lang: any;
  ngOnInit() {
    this.serviceService.getGalleryList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        localStorage.setItem('count', data.totalPages);
        this.listgallery = data.pageContent;
      },
      error => console.log(error)
    );
   console.log('total count for count.......................', this.totalcount);
    this.checking();
    this.nextchecking();
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

next() {
    this.p++;
    this.serviceService.getGalleryList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        this.listgallery = data.pageContent;
        console.log('total count', this.totalcount);
      },
      error => console.log(error)
    );
    console.log('next button', this.p);
    this.checking();
    this.nextchecking();
    }
previous() {
      console.log('before', this.p);
      this.p--;
      this.serviceService.getGalleryList (this.p).subscribe(
        data => {
          this.totalcount = data.totalPages;
          this.listgallery = data.pageContent;
          console.log('total count', this.totalcount);
        },
        error => console.log(error)
      );
      this.checking();
      this.nextchecking();
      console.log('after', this.p);
    }
checking() {
      if (this.p === 1) {
        this.check = true;
        console.log('if pp is 0', this.check);
      } else {
        this.check = false;
        console.log('if pp is not 0', this.check);

      }

    }
nextchecking() {
  this.count = localStorage.getItem('count');
  console.log('count for pagination', this.count % 8 + 2);
      if (this.p === this.count / 8) {

        this.checknext = true;
        console.log('if pn is 0', this.checknext);
      } else {
        this.checknext = false;
        console.log('if pn is not 0', this.checknext);

      }
    }


}

