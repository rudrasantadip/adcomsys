import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {

  eventDate:string='June 26, 2024 00:00:00' // Date of the event
  private countdownDate = new Date(this.eventDate).getTime(); // getting the date object from the event
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    // updating the countdown at each second
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  //variables for caculating days, hours, minutes , seconds
  public days!: number;
  public hours!: number;
  public minutes!: number;
  public seconds!: number;


  //count down update function
  private updateCountdown(): void {
    const now = new Date().getTime(); //getting the current date
    const distance = this.countdownDate - now; // subtracting the current date from event date

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.days = this.hours = this.minutes = this.seconds = 0;
    }
  }
  
}
