import { Component, OnInit } from '@angular/core';

//Fontawesome Icons
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Fontawesome Icon Variables
  faCoffee = faCoffee
  faHome = faHome;
  faCalendar =faCalendar;
  faUserAlt = faUserAlt;
  faGear = faGear;

  constructor() { }

  ngOnInit(): void {
  }

}
