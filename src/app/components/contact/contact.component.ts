import { Component, OnInit } from '@angular/core';
import { MessageModel } from 'src/app/models/MessageModel';
import { ContactService } from 'src/app/services/contact.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    public contactModel: MessageModel = new MessageModel();

    constructor(public contactService: ContactService, public title: Title) { }

    ngOnInit() {
        this.title.setTitle("Contact page");
    }
    public send() { // Send the contact request
        this.contactModel.DateHour = new Date(); // Get the date
        this.contactService.addMessage(this.contactModel).subscribe((s) => { // And then send the contact model which is taken from the HTML
            if(!s) {
                return alert(`There has been an error contacting.`);
            }
            alert(`Contact request submitted.`);
        })
    }
}
