import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'posts';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Mon premier post dans le premier blog',
      loveIts: 3,
      createdAt: new Date()
    },
    {
      title: 'Mon 2eme post',
      content: 'Mon 2eme post dans le 2eme blog',
      loveIts: -1,
      createdAt: new Date()
    },
    {
      title: 'Mon 3eme post',
      content: 'Mon 3eme post dans le 3eme blog',
      loveIts: 0,
      createdAt: new Date()
    },
  ];
}
