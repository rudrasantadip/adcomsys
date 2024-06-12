import { Component } from '@angular/core';

export interface Partner
{
  pId:number;
  logoUrl:string;
}


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {

  //Add community partner images here
  communityPartners:Partner[]=[
    {
      pId:1,
      logoUrl:'/assets/images/csi.jpeg'
    },
    {
      pId:2,
      logoUrl:'/assets/images/gfg.jpeg'
    }
    , 
    {
      pId:3,
      logoUrl:'/assets/images/iete.jpeg'
    },
    {
      pId:4,
      logoUrl:'/assets/images/pragya.jpeg'
    },
    {
      pId:5,
      logoUrl:'/assets/images/design.jpg'
    }
  ]

  // add technical partner images here
  technicalPartners:Partner[] = [
    {
      pId:1,
      logoUrl:'/assets/images/gfg-bg-less.png'
    }
  ]
}
