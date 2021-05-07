import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    {
      title: "Neat Tree",
      imageUrl: "assets/tree.jpeg",
      username: "nature",
      content: "Today I saw a beautiful green tree."
    },
    {
      title: "Snowy Mountain",
      imageUrl: "assets/mountain.jpeg",
      username: "mountainlover",
      content: "Here is a picture of snowy mountain."
    },
    {
      title: "Mountain Biking",
      imageUrl: "assets/biking.jpeg",
      username: "biking12255",
      content: "Today I done some biking."
    }
  ];
}
