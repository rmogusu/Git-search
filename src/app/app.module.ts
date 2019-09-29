import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import { SearchUserComponent } from './search-user/search-user.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoHighlightDirective } from './logo-highlight.directive';
import { FooterComponent } from './footer/footer.component';
import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserDataComponent,
    SearchUserComponent,
    UserRepoListComponent,
    NotFoundComponent,
    LogoHighlightDirective,
    FooterComponent,
    DateCountPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
