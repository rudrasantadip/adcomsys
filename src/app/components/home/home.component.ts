import { Component,ElementRef,HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  muted:boolean=true;
  screenWidth: number;
  screenHeight: number;

  constructor(private elRef:ElementRef) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnInit(): void {
    
  }

 
   
  
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  restartVideo() {
    const video: HTMLVideoElement  |null = document.querySelector('video');
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  }

  getFontSize(): number {
    // Calculate font size based on screen width
    // You can adjust the logic based on your requirements
    if (this.screenWidth >= 768) {
      return Math.round(this.screenWidth * 0.05); // 2% of screen width for large screens
    } else {
      return Math.round(this.screenWidth * 0.03); // 3% of screen width for small screens
    }
  }

  adcomsysFont():number
  {
    if (this.screenWidth >= 768) {
      return Math.round(this.screenWidth * 0.015); // 2% of screen width for large screens
    } else {
      return Math.round(this.screenWidth * 0.014); // 3% of screen width for small screens
    }
  }

  iconsFont():number
  {
    if (this.screenWidth >= 768) {
      return Math.round(this.screenWidth * 0.02);
    } else {
      return Math.round(this.screenWidth * 0.05); 
    }
  }
}
