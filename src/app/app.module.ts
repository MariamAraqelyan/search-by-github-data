import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import {reducers, metaReducers} from './stores/reducers/index';
import {SearchEffects} from './stores/effects/search.effects';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { SearchBarComponent } from './microComponents/search-bar/search-bar.component';
import { SearchDataListComponent } from './microComponents/search-data-list/search-data-list.component';
import { SearchDataItemComponent } from './microComponents/search-data-item/search-data-item.component';
import { SearchDataInfoComponent } from './microComponents/search-data-info/search-data-info.component';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {HomepageComponent} from "./pages/homepage/homepage.component";


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchDataListComponent,
    SearchDataItemComponent,
    SearchDataInfoComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forFeature([SearchEffects]),
    EffectsModule.forRoot([SearchEffects]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
