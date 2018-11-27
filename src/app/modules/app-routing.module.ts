import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { GamePageComponent } from '../components/game-page/game-page.component';
import { ScoresComponent } from '../components/scores/scores.component';
import { LeaveFeedbackComponent } from '../components/leave-feedback/leave-feedback.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { Page404Component } from '../components/page404/page404.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'game', component: GamePageComponent},
    {path: 'scores', component: ScoresComponent},
    {path: 'leave-feedback', component: LeaveFeedbackComponent},
    {path: 'feedbacks', component: FeedbacksComponent},
    {path: 'contact-us', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
