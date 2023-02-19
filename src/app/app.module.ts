import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fromReducer from '../store/theme.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { StoreModule } from '@ngrx/store';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListItemsComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({example: fromReducer.reducer})
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
