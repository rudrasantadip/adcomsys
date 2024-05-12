import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent 
 {

  constructor(private route:Router)
  {

  }
  events: any[] = [
    { title: 'Poster Compedition', description: 'A Poster compedition set to showing ones creative and technical knowledge in a single canvas', date: '26th June 2024', time: '10:00 AM', imageUrl: '/assets/images/poster.jpeg' },
    { title: 'Flutter Fiesta', description: 'A trancendental journey with flutter guided by industry experts', date: '26th June 2024', time: '10:00 AM', imageUrl: '/assets/images/flutter.jpeg' },
    { title: 'Wisdom War', description: 'A quiz compedition! A game of wits, show your chalice of intution and sharpness', date: '27th June 2024', time: '11:00 AM', imageUrl: '/assets/images/quiz.jpeg'},
    // Add more events as needed

   
  ];

  register(eve:any)
  {
   
    if(eve.title=='Poster Compedition')
      {
        window.open('https://adcomsys.tech/postercompetition','_blank')
        this.route.navigate([]);
      }
      else if(eve.title=='Flutter Fiesta')
      {
        window.open('https://adcomsys.tech/FlutterFiesta','_blank')
      }
      else if(eve.title=='Wisdom War')
        {
          window.open('https://adcomsys.tech/WisdomWar','_blank')
        }
  }
}
