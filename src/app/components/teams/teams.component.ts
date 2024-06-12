import { Component } from '@angular/core';
export interface Member
{
  name:string;
  designation:string;
  qualification:string;
  image:string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent
{
  coreMembers:Member[] = [
    {
      name:'Diptadip Biswas',
      designation:'Core Member',
      qualification:'8348284337',
      image:'/assets/images/members/diptadip_biswas.jpg'
    },
    {
      name:'Diptayan Manna',
      designation:'Core Member',
      qualification:'7679262022',
      image:'/assets/images/members/diptayan.jpeg'
    },
    {
      name:'Soumik Das',
      designation:'Core Member',
      qualification:'7601885361',
      image:'/assets/images/members/soumik.jpg'
    },
    {
      name:'Sayan Das',
      designation:'Core Member',
      qualification:'6295064322',
      image:'/assets/images/members/sayan.jpg'
    }
    ,
    {
      name:'Priyam Dutta',
      designation:'Core Member',
      qualification:'9832757562',
      image:'/assets/images/members/priyam_dutta.jpg'
    },
    {
      name:'Subhajit Dutta',
      designation:'Core Member',
      qualification:'8583833292',
      image:'/assets/images/members/subhajit_dutta.JPG'
    },
    {
      name:'Sayan Ghosh',
      designation:'Core Member',
      qualification:'9832454018',
      image:'/assets/images/members/sayan_ghosh.jpg'
    },
    {
      name:'Sagar Bera',
      designation:'Core Member',
      qualification:'9331510484',
      image:'/assets/images/members/sagar_bera.jpg'
    },
    {
      name:'Santadip Rudra',
      designation:'Core Member',
      qualification:'7044522841',
      image:'/assets/images/members/santadip.jpeg'
    },
    {
      name:'Samiran Jana',
      designation:'Core Member',
      qualification:'9735575264',
      image:'/assets/images/members/samiran.jpeg'
    },
    {
      name:'Ayan Chatterjee',
      designation:'Core Member',
      qualification:'6289836252',
      image:'/assets/images/members/r.jpg'
    },
    {
      name:'Sarbojit Podder',
      designation:'Core Member',
      qualification:'6289777382',
      image:'/assets/images/members/sarbojit_poddar.jpg'
    },
    {
      name:'Punyabrata Guchhait',
      designation:'Core Member',
      qualification:'7003217490',
      image:'/assets/images/members/punyabrata_guchait.jpg'
    },
    {
      name:'Saikat Das',
      designation:'Core Member',
      qualification:'8334066167',
      image:'/assets/images/members/saikat.jpg'
    }
  ];

  coordinators:Member[]=[
   
    {
      name:'Samrat Das',
      designation:'Coordinator',
      qualification:'6291999868',
      image:'/assets/images/members/samrat_das.JPG'
    },
    {
      name:'Pratyay Chatterjee',
      designation:'Coordinator',
      qualification:'8918389523',
      image:'/assets/images/members/pratay_chaterjee.jpeg'
    },
    {
      name:'Chirag Gupta',
      designation:'Coordinator',
      qualification:'7003924897',
      image:'/assets/images/members/chi.jpeg'
    },
    {
      name:'Shayak Karan',
      designation:'Coordinator',
      qualification:'9123362188',
      image:'/assets/images/members/sayak.jpeg'
    },
    {
      name:'Anuran Bhowmik',
      designation:'Coordinator',
      qualification:'9123362188',
      image:'/assets/images/members/anuran.jpeg'
    }
  ]


  taskForce:Member[]=[
    {
      name:'Saswata Mukherjee',
      designation:'Task Force',
      qualification:'8584874226',
      image:'/assets/images/members/saswata.jpeg'
    },
    {
      name:'Ayan Koley',
      designation:'Task Force',
      qualification:'9874870505',
      image:'/assets/images/members/joy_koley.jpg'
    },
    {
      name:'Mohit Sarkar',
      designation:'Task Force',
      qualification:'9330726358',
      image:'/assets/images/members/mohit_sarkar.jpeg'
    },
    {
      name:'Drisha Jana',
      designation:'Task Force',
      qualification:'6290164743',
      image:'/assets/images/members/drisha_jana.jpeg'
    },
    {
      name:'Reek Banerjee	',
      designation:'Task Force',
      qualification:'6289706721',
      image:'/assets/images/members/rik_banerjee.png'
    },
    {
      name:'Rajdeep Mondal',
      designation:'Task Force',
      qualification:'9163285863',
      image:'/assets/images/members/rajdeep_mondal.jpg'
    },
    {
      name:'Saptarshi Chattaraj',
      designation:'Task Force',
      qualification:'9434565505',
      image:'/assets/images/members/saptarshi.jpg'
    }
  ];


  volunteers:Member[]=[
    {
      name:'Ishita Mondal',
      designation:'Volunteer',
      qualification:'8777073845',
      image:'/assets/images/members/ishita_mondal.jpg'
    },
    {
      name:'Rishab Deb Paul',
      designation:'Volunteer',
      qualification:'8436665543',
      image:'/assets/images/members/rishab_deb_pal.png'
    },
    {
      name:'Anuja Roy',
      designation:'Volunteer',
      qualification:'	9007811583',
      image:'/assets/images/members/anuja_roy.jpg'
    },
    {
      name:'Pratik Saha',
      designation:'Volunteer',
      qualification:'7890330005',
      image:'/assets/images/members/pratik_saha.jpg'
    },
    {
      name:'Ritika Das',
      designation:'Volunteer',
      qualification:'9475322271',
      image:'/assets/images/members/ritika_das.jpeg'
    },
    {
      name:'Diya Maji',
      designation:'Volunteer',
      qualification:'9874749434',
      image:'/assets/images/members/diya_maji.jpeg'
    },
    {
      name:'Disha Basak',
      designation:'Volunteer',
      qualification:'8777373893',
      image:'/assets/images/members/disha_basak.jpeg'
    },
  ];


}
