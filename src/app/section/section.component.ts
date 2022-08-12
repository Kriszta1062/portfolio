import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  sections2: {id: string, name: string}[] = [
    {id: "aboutMe", name: "About me"}, 
    {id: "projects", name: "Projects"}, 
    {id: "contacts", name: "Contacts"},    
]

  constructor() { }

  ngOnInit(): void {
  }

}
