import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  screenWidth: number;
  screenHeight: number;

  constructor(private elRef:ElementRef) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  adcomsysFont():number
  {
    if (this.screenWidth >= 768) {
      return Math.round(this.screenWidth * 0.013); // 2% of screen width for large screens
    } else {
      return Math.round(this.screenWidth * 0.014); // 3% of screen width for small screens
    }
  }
}
