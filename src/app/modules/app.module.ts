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
    
  GameCardComponent],
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
