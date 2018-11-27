import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/modules/app-routing.module';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    constructor(public router: Router, private userService: UserService, public title: Title) { }

    ngOnInit() {
        this.redirect(); // Redirect if user is already logged in..
        this.title.setTitle("Memory Game log in")
    }
    public login(a: string, b: string): void { // Log in function
        let observable = this.userService.getUserByDetails(a, b);
        observable.subscribe(s => {
            if(!s) {
                alert('Wrong username or password.');
                return;
            }
            else if(a == s.userName && b == s.password) { // If the username and password are correct - log in.
                sessionStorage.setItem("LoggedIn", "true");
                sessionStorage.setItem("userID", `${s.userId}`);
                this.router.navigate(['/home']);
            }
        })
    }
    public redirect(): void {
        if(sessionStorage.getItem("LoggedIn") == "true") {
            this.router.navigate(['/home'])
        }
    }

}
