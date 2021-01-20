import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { IntroComponent } from './sections/home/intro/intro.component';
import { ExperienceComponent } from './sections/home/experience/experience.component';
import { SolutionsComponent } from './sections/home/experience/solutions/solutions.component';
import { LatestProjectsComponent } from './sections/home/experience/latest-projects/latest-projects.component';
import { ExperiencesComponent } from './sections/home/experience/experiences/experiences.component';
import { PartnersComponent } from './sections/home/partners/partners.component';
import { ArticlesComponent } from './sections/home/articles/articles.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorksComponent } from './sections/works/works.component';
import { GalleryComponent } from './sections/works/gallery/gallery.component';
import { WorkDetailsComponent } from './sections/works/work-details/work-details.component';
import { ChallengeComponent } from './sections/works/work-details/challenge/challenge.component';
import { SolutionComponent } from './sections/works/work-details/solution/solution.component';
import { GoogleMapsComponent } from './sections/contact/google-maps/google-maps.component';
import { ContactFormComponent } from './sections/contact/contact-form/contact-form.component';
import { NewsComponent } from './sections/news/news.component';
import { HeaderCategoriesComponent } from './sections/header-categories/header-categories.component';
import { SliderComponent } from './sections/slider/slider.component';
import { JoinOurListComponent } from './sections/join-our-list/join-our-list.component';
import { GridOfPostsComponent } from './sections/grid-of-posts/grid-of-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    ExperienceComponent,
    SolutionsComponent,
    LatestProjectsComponent,
    ExperiencesComponent,
    PartnersComponent,
    ArticlesComponent,
    ContactComponent,
    WorksComponent,
    GalleryComponent,
    WorkDetailsComponent,
    ChallengeComponent,
    SolutionComponent,
    GoogleMapsComponent,
    ContactFormComponent,
    NewsComponent,
    HeaderCategoriesComponent,
    SliderComponent,
    JoinOurListComponent,
    GridOfPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
