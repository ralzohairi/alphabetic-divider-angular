import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** Stores the list to display with alphabetic dividers */
  list: string[] = [
    "The 1",
    "Cardigan",
    "The Last Great American Dynasty",
    "Exile",
    "My Tears Ricochet",
    "Mirrorball",
    "Seven",
    "August", 
    "This Is Me Trying",
    "Illicit Affairs",
    "Invisible String",
    "Mad Woman",
    "Epiphany",
    "Betty",
    "Peace",
    "Hoax",
  ];
}
