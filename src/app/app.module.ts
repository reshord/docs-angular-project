import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fromReducer from '../store/theme.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { themeService } from '../services/theme.service';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({example: fromReducer.reducer})
  ],
  providers: [themeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
