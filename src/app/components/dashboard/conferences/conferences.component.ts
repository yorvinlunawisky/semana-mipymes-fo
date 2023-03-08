import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';"@angular/forms";

//Fontawesome Icons
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent implements OnInit {
  // Fontawesome Icon Variables
  faCoffee = faCoffee
  faHome = faHome;
  faCalendar =faCalendar;
  faUserAlt = faUserAlt;
  faGear = faGear;

  // Conference Form Controls
  name = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  degree = new FormControl('', Validators.required);
  instagram = new FormControl('', Validators.required);
  twitter = new FormControl('', Validators.required);
  telegram = new FormControl('', Validators.required);
  web = new FormControl('', Validators.required);

  // Conference Form Group
conferenceGroup = new FormGroup({
  name: this.name,
  lastName: this.lastName,
  degree: this.degree,
  instagram: this.instagram,
  twitter: this.twitter,
  telegram: this.telegram,
  web: this.web
});

onRegisterConferences() {
  const newConference = {

  }
  console.log(this.conferenceGroup)
}

  ngOnInit(): void {
  }

}
