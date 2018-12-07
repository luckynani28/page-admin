import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideosComponent } from './components/videos/videos.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewposterComponent } from './components/viewposter/viewposter.component';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';
import { ViewgalleryComponent } from './viewgallery/viewgallery.component';
// Route Configuration
export const routes: Routes = [

  { path: '', component: ViewposterComponent },
 { path: 'promo', component: PromotionsComponent },
  { path: 'Articles', component: ViewarticleComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'Videos', component: VideosComponent },
  { path: 'posters', component: ViewgalleryComponent },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
