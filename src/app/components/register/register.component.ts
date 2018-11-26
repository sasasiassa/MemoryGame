import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { UserService } from 'src/app/services/User.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public register: UserModel = new UserModel();
    constructor(private userService: UserService) { }

    ngOnInit() {
    }
    public send(): void {
        let user: UserModel = this.register;
        let observe = this.userService.getUserByDetails(user.userName, user.password);
        observe.subscribe(s => {
            if (!s) {

                let observable = this.userService.addUser(user);
                observable.subscribe(s => {
                    alert('user added ' + s.userId);
                })

            }
            else {
                alert(`user already exists`);
            }
        })

    }

}
