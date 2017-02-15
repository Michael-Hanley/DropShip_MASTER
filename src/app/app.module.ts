import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {SearchBarService} from './search-bar.service';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  { path: 'Item-Search', component: ItemDisplayComponent},
  { path: '', redirectTo: '/Item-Search', pathMatch: 'full'},
  { path: 'user-profile', component: UserProfileComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ItemDisplayComponent,
    NavBarComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
