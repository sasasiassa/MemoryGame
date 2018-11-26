import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/modules/app-routing.module';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    constructor(public router: Router, private userService: UserService) { }

    ngOnInit() {
        this.redirect();
    }
    public login(a: string, b: string): void {
        let observable = this.userService.getUserByDetails(a, b);
        observable.subscribe(s => {
            if(!s) {
                return
            }
            else if(a == s.userName && b == s.password) {
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
