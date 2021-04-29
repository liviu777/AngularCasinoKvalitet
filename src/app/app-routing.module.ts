import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {Routes, RouterModule, RoutesRecognized} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
