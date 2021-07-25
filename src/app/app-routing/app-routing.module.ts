import { VoteComponent } from './../vote/vote.component';
import { WineComponent } from './../wine/wine.component';
import { ResumeComponent } from './../resume/resume.component';
import { MemeComponent } from './../meme/meme.component';
import { ImageComponent } from './../image/image.component';
import { GalleryComponent } from './../gallery/gallery.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'image',
    component: ImageComponent
  },
  {
    path: 'meme',
    component: MemeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'vote',
    component: VoteComponent
  },
  {
    path: 'wine',
    component: WineComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports: [
    RouterModule
    ],
  declarations: [],
})
export class AppRoutingModule { }
