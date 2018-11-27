import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public isLoggedIn(): boolean { // Check if user is logged in, then show items in the menu accordingly.
      if(sessionStorage.getItem("LoggedIn") == "true") {
          return true;
      }
      return false;
  }
}
