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

        let observe = this.userService.getUserByDetails(user.userName, user.password); // Take the username and password.
        observe.subscribe(s => {
            if (!s) { // If the user does not exist - add it

                let observable = this.userService.addUser(user);
                observable.subscribe(s => {
                    alert('Registered successfully!');
                })

            }
            else { // If the user exists, alert the user.
                alert(`User already exists`);
            }
        })

    }

}
