import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WorkDetailsComponent } from './works/work-details/work-details.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: 'home', component: HomeComponent },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'works', component: WorksComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
