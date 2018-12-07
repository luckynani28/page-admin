import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../service.service';


@Component({
  selector: 'app-viewposter',
  templateUrl: './viewposter.component.html',
  styleUrls: ['./viewposter.component.css']
})
export class ViewposterComponent implements OnInit {

  title: any;
  signupform: FormGroup;
  submitted = false;
  file: any;
  heading: any;
  type: any;
  editdata: any;
  viewdata: any;
  lang: any;
  id: any;
  totalcount: any;
  p =   1;
listdata: any;
  filesToUpload: Array<File> = [];
  constructor( private http: HttpClient, private serviceService: ServiceService) { }
  ngOnInit() {

    this.pagiantionList(this.p);
 }



// all list  method
 public pagiantionList(page) {
  console.log('list', page);
  this.serviceService.getPromoAdvertList (page).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.listdata = data.pageContent;
      console.log('total count', this.totalcount);
    },
    error => console.log(error)
  );
}




// view item method
viewitem(id) {
    this.serviceService.viewitembyid(id).subscribe(
      data => {
        this.viewdata = data;
        console.log('view...........................', this.viewdata);
        console.log('view...........................', this.viewdata.promoimg);
      },
      error => console.log(error)
    );

  }



// delete item method
    deleteitem(id) {
    this.serviceService.deleteitembyid(id).subscribe(
      data => {
      },
      error => console.log(error)
    );
    window.location.reload();
  }



// edit item method
  edititem(id) {
    this.serviceService.editpromoandAdvert(id).subscribe(
      data => {
        this.editdata = data;
        this.id = this.editdata.id;
        console.log('editdata...........................', this.editdata);
      },
      error => console.log(error)
    );
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
    console.log('form data variable :   ' + formData.toString());
    this.http.post('http://192.168.1.14:8080/savepromotions', formData) .subscribe(file => console.log('file', file));
window.location.reload();
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

editId(fileInput: any) {
  this.id = fileInput.target.value;
}
onSubmit() {
  this.submitted = true;
  this.upload();
}
Save() {
  const formData: any = new FormData();
  const files: Array<File> = this.filesToUpload;
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i]);
    formData.append('contenttype', this.type);
    formData.append('title', this.title);
    formData.append('language', this.lang);
    formData.append('id', this.id);
  }
  console.log('form data variable :   ' + formData.toString());
  this.http.post('http://192.168.1.14:8080/editpromotions', formData) .subscribe(file => console.log('file', file));
}
}
