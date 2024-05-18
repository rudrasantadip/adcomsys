import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


export interface Event
{
  title:string;
  description:string;
  date:string;
  time:string;
  imageUrl:string;
  formLink:string;
}

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
  events: Event[] = [
    { title: 'Poster Compedition', description: 'A Poster compedition set to showing ones creative and technical knowledge in a single canvas', date: '26th June 2024', time: '10:00 AM', imageUrl: '/assets/images/poster.jpeg' ,formLink:' https://forms.gle/nZMKMDgStm5624zx7'},
    { title: 'Flutter Fiesta', description: 'A trancendental journey with flutter guided by industry experts', date: '26th June 2024', time: '10:00 AM', imageUrl: '/assets/images/flutter.jpeg',formLink:'https://forms.gle/JPePyaqbEzUfCQGd9' },
    { title: 'Wisdom War', description: 'A quiz compedition! A game of wits, show your chalice of intution and sharpness', date: '27th June 2024', time: '11:00 AM', imageUrl: '/assets/images/quiz.jpeg',formLink:'https://forms.gle/G9AiRCNxjPXu9gvU8'},
    { title: 'Coders Brawl', description: 'Unleash your coding prowess and compete for glory at the Ultimate Code Clash', date: '27th June 2024', time: '7:30 PM', imageUrl: '/assets/images/coding_contest.png',formLink:''},
    // Add more events as needed   
  ];

  register(eve:Event)
  {
    window.open(eve.formLink,'_blank');
  }
}
