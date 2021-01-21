import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailsComponent } from './works/work-details/work-details.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { OurLatestProjectsComponent } from './home/our-latest-projects/our-latest-projects.component';
import { BestSolutionsForYourDreamComponent } from './home/best-solutions-for-your-dream/best-solutions-for-your-dream.component';
import { SatisfactionEmployeesProjectsComponent } from './home/satisfaction-employees-projects/satisfaction-employees-projects.component';
import { WeCanCreateMoreThanYouExpectComponent } from './home/we-can-create-more-than-you-expect/we-can-create-more-than-you-expect.component';
import { AnAwardWinningArchitectsCompanyComponent } from './home/an-award-winning-architects-company/an-award-winning-architects-company.component';
import { LauraLorewnceQuoteComponent } from './home/laura-lorewnce-quote/laura-lorewnce-quote.component';
import { PartnersComponent } from './home/partners/partners.component';
import { InspirarionsAndExperiencesComponent } from './home/inspirarions-and-experiences/inspirarions-and-experiences.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhatWeDoComponent,
    WorksComponent,
    WorkDetailsComponent,
    NewsComponent,
    ContactComponent,
    Error404Component,
    OurLatestProjectsComponent,
    BestSolutionsForYourDreamComponent,
    SatisfactionEmployeesProjectsComponent,
    WeCanCreateMoreThanYouExpectComponent,
    AnAwardWinningArchitectsCompanyComponent,
    LauraLorewnceQuoteComponent,
    PartnersComponent,
    InspirarionsAndExperiencesComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
