import { Component,HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adcomsys';
  screenWidth:number;
  constructor(private viewportScroller: ViewportScroller)
  {
    this.screenWidth=window.innerWidth;
  }

  //function for navigation scrolling
  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any)
  {
    this.screenWidth=window.innerWidth;
  }

  getImageWidth(): number {
    // Calculate image width based on screen width
    // You can adjust the logic based on your requirements
    if (this.screenWidth >= 768) {
      return this.screenWidth * 0.07; // 7% of screen width for large screens
    } else {
      return this.screenWidth * 0.09; // 90% of screen width for small screens
    }
  }

  getFontSize(): number {
    // Calculate font size based on screen width
    // You can adjust the logic based on your requirements
    if (this.screenWidth >= 768) {
      return Math.round(this.screenWidth * 0.02); // 2% of screen width for large screens
    } else {
      return Math.round(this.screenWidth * 0.03); // 3% of screen width for small screens
    }
  }
}
