import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {LoaderService} from "./services/loader.service";
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faCoffee = faCoffee;
  isLoading: boolean = false;

  constructor(public loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.onLoading();
  }

  // This function is called when the component is loaded. It will trigger the loading animation.
  onLoading() {
    // The use of Delay here is just to provide another way to prolong the loading animation time.
    this.loaderService.isLoading.pipe(delay(0))
      .subscribe((loading) => {
        this.isLoading = loading;
      })
  }
}
