import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SoloCardsComponent } from './home/solo-cards/solo-cards.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { TextDescriptionsComponent } from './home/solo-cards/text-descriptions/text-descriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoloCardsComponent,
    SearchBarComponent,
    TextDescriptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [TextDescriptionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
