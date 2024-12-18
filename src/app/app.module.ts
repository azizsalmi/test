import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HomeComponentsComponent } from './components/home-components/home-components.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: ListAlbumsComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component:HomeComponentsComponent  }, 

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentsComponent,
    ListAlbumsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
