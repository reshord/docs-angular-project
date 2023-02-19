import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatIsAngularComponent } from 'src/pages/introductionToAngular/what-is-angular/what-is-angular.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  // {path: '**', redirectTo: '/'},
  {path: '', component: HomePageComponent},
  {path: '1.1', component: WhatIsAngularComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
