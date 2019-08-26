import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // @Input() appareilName: string = 'Machine à laver';
  constructor() {
    this.createdAt = new Date();
  }
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;
  ngOnInit() {
  }
  onClickOn() {
    this.loveIts++;
  }
  onClickOff() {
   this.loveIts--;
  }
  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }
}
