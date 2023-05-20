import { Component } from '@angular/core';
import nav_links from './header.json';

interface navData{
  logo: string
  company : string
  first_link:string
  second_link: string 
  third_link: string 
  fourth_link:string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
 nav_data : navData[] = nav_links;
}
