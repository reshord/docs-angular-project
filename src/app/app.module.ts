import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { themeService } from '../assets/services/theme.service';
import { ListItemsComponent } from './components/list-items/list-items.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListItemsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [themeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
