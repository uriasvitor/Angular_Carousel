import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './core/components/buttons/buttons.component';
import { HomeComponent } from './core/components/home/home.component';
import { DetailsComponent } from './core/components/lists/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
