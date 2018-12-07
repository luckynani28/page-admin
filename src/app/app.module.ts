import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { VideosComponent } from './components/videos/videos.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ViewposterComponent } from './components/viewposter/viewposter.component';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';
import { ViewgalleryComponent } from './viewgallery/viewgallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PromotionsComponent,
    ArticlesComponent,
    VideosComponent,
    GalleryComponent,
    ViewposterComponent,
    ViewarticleComponent,
    ViewgalleryComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    // FroalaEditorModule,
    // FroalaViewModule,
    routing,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
