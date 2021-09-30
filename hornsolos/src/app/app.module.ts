import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SoloCardsComponent } from './home/solo-cards/solo-cards.component';
import { TextDescriptionsComponent } from './home/solo-cards/text-descriptions/text-descriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoloCardsComponent,
    TextDescriptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [TextDescriptionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
