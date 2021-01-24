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
import { WeHelpBuildingComponent } from './what-we-do/we-help-building/we-help-building.component';
import { SimplicityComponent } from './what-we-do/simplicity/simplicity.component';
import { OurClientsComponent } from './what-we-do/our-clients/our-clients.component';
import { OurApproachComponent } from './what-we-do/our-approach/our-approach.component';
import { GalleryComponent } from './works/gallery/gallery.component';
import { IntroWorkDetailsComponent } from './works/work-details/intro-work-details/intro-work-details.component';
import { IntroComponent } from './works/intro/intro.component';
import { WorkDetailsChallengeComponent } from './works/work-details/work-details-challenge/work-details-challenge.component';
import { WorkDetailsSolutionComponent } from './works/work-details/work-details-solution/work-details-solution.component';
import { NewsSlidersComponent } from './news/news-sliders/news-sliders.component';
import { JoinOurListComponent } from './news/join-our-list/join-our-list.component';
import { NewsPostsComponent } from './news/news-posts/news-posts.component';
import { NewsPostDetailsComponent } from './news/news-post-details/news-post-details.component';
import { NewsHeaderComponent } from './news/news-header/news-header.component';
import { NewsAuthorComponent } from './news/news-author/news-author.component';
import { TestimonialsComponent } from './what-we-do/testimonials/testimonials.component';


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
    WeHelpBuildingComponent,
    SimplicityComponent,
    OurClientsComponent,
    IntroComponent,
    OurApproachComponent,
    GalleryComponent,
    IntroWorkDetailsComponent,
    WorkDetailsChallengeComponent,
    WorkDetailsSolutionComponent,
    NewsSlidersComponent,
    JoinOurListComponent,
    NewsPostsComponent,
    NewsPostDetailsComponent,
    NewsHeaderComponent,
    NewsAuthorComponent,
    TestimonialsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
