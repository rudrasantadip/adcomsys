import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit
{
  loading: boolean = true;
  constructor(private router: Router) { }
  ngOnInit(): void {
      // Simulating some delay before navigating to main content
      setTimeout(() => {
          this.router.navigate(['/home']); // Navigate to main component
      }, 3000); // Change the time delay as needed
  }

}
