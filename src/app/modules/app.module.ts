import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { LoginComponent } from '../components/login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from '../components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { GamePageComponent } from '../components/game-page/game-page.component';
import { GameBoardComponent } from '../components/game-board/game-board.component';
import { GameCardComponent } from '../components/game-card/game-card.component';
import { ScoresComponent } from '../components/scores/scores.component';
import { LeaveFeedbackComponent } from '../components/leave-feedback/leave-feedback.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { Page404Component } from '../components/page404/page404.component';

@NgModule({
  declarations: [
    
  LayoutComponent,
    
  HeaderComponent,
    
  HomeComponent,
    
  FooterComponent,
    
  MenuComponent,
    
  LoginComponent,
    
  RegisterComponent,
    
  GamePageComponent,
    
  GameBoardComponent,
    
  GameCardComponent,
    
  ScoresComponent,
    
  LeaveFeedbackComponent,
    
  FeedbacksComponent,
    
  ContactComponent,
    
  AboutComponent,
    
  Page404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
