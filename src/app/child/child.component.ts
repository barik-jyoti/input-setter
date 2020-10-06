import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  private _likes: number;

  @Input()
  set likes(value: number) {
    this._likes = value;

    this.getBadgeColor();
  }

  get likes() {
    return this._likes;
  }

  badgeColor: string;

  private getBadgeColor() {
    if (this.likes > 5 && this.likes <= 10) {
      this.badgeColor = 'black';
    } else if (this.likes > 10 && this.likes <= 15) {
      this.badgeColor = 'tan';
    } else if (this.likes > 15) {
      this.badgeColor = 'tomato';
    } else {
      this.badgeColor = 'grey';
    }
  }
  
}
