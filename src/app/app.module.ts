import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AnimateOnScrollDirective } from './directives/animate-on-scroll.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { BodyComponent } from './components/body/body.component';
import { PartnerComponent } from './components/partner/partner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    TeamsComponent,
    AnimateOnScrollDirective,
    LoaderComponent,
    BodyComponent,
    PartnerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
