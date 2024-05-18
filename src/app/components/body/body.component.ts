import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  //variable to store the current screen width
  screenWidth:number;
  constructor(private viewportScroller: ViewportScroller)
  {
    this.screenWidth=window.innerWidth; // setting the screen with as the current window size
  }

  //function for navigation scrolling
  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  //event listener for screen size change
  @HostListener('window:resize',['$event'])
  onResize(event:any)
  {
    this.screenWidth=window.innerWidth;
  }

  //Setting the header width
  setHeaderWidth():number
  {
    return this.screenWidth;
  }

  //Setting the image width wrt screen
  getImageWidth(): number {
    // Calculate image width based on screen width
    // You can adjust the logic based on your requirements
    if (this.screenWidth >= 768) {
      return this.screenWidth * 0.07; // 7% of screen width for large screens
    } else {
      return this.screenWidth * 0.09; // 90% of screen width for small screens
    }
  }

  //Setting the font size wrt screen
  getFontSize(): number {
    // Calculate font size based on screen width
    // You can adjust the logic based on your requirements
    if (this.screenWidth >= 768) {
      return Math.round(this.screenWidth * 0.018); // 2% of screen width for large screens
    } else {
      return Math.round(this.screenWidth * 0.017); // 3% of screen width for small screens
    }
  }
}
