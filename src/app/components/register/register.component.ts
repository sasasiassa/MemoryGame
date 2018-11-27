import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { UserService } from 'src/app/services/User.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public register: UserModel = new UserModel();

    constructor(private userService: UserService, public title: Title) { }

    ngOnInit() {
        this.title.setTitle("Memory Game Register");
    }
    public send(): void { // Send the registration request
        let user: UserModel = this.register;

        let observe = this.userService.getAllUsers().subscribe((s) => {
            if (!s) {
                return;
            }
            else {
                for (let i = 0; i < s.length; i++) {
                    if(user.userName == s[i].userName) { // Check if user already exists
                        return alert(`Username already exists`); 
                    }
                }
                let observer = this.userService.addUser(user).subscribe((s) => { // If not, create the new user.
                    alert(`User created successfully`);
                })
            }
        })

    }
}
