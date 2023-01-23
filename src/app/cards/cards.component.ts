import { Component, Input, OnInit } from '@angular/core';
import { Card } from './cards.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() key: string;

  collections = {
    aboutMe: [
      new Card(
        'Fejes Krisztina',
        'My name is Fejes Krisztina. I study Business informatics at the University of Szeged, where I have one semester left. I am a very hardworking and persistent person, when I decide something, I always work until I reach it. ',
        '/assets/image/resized/self2.jpg',
        '/assets/image/resized/self2.jpg'
      ),
      new Card(
        'Pet',
        'I have the cutest hamster ever. Kálmán is 2 years old, and he is the sunshine on my cloudy, gray days. He is such a unique little guy, you can not have enough of him. ',
        '/assets/image/resized/kalman2.jpg',
        '/assets/image/resized/kalman.gif'
      ),
      new Card(
        'IT skills',
        'Confident: HTML, CSS, JavaSrcipt, ThreeJs, Blender. Beginner: Angular, Typescript',
        '/assets/image/it.png',
        '/assets/image/it.png'
      ),
      new Card(
        'Language skills',
        'I speak english, a little bit of german, and I am planning to learn spanish after I get the required level of german.',
        '/assets/image/language.png',
        '/assets/image/language.png'
      ),
      new Card(
        'Learning',
        'I love learning new technologies from tutorials, I am always excited when I learn something new, and I can use it in my projects, which are keep evolving in this way.',
        '/assets/image/learn.png',
        '/assets/image/learn.png'
      ),
      new Card(
        'Modelling',
        'About one year ago I started learning modelling, and if I have a little time, I like to model low-poly buildings. My final work at University is a city building game, so I can use all my models there. I also designed a train station in my 4. semester and I used one of my models there too. ',
        '/assets/image/resized/modelling5.png',
        '/assets/image/resized/modelling.gif'
      ),
      new Card(
        'Cooking',
        'If I could choose another profession, I would be a chef. I am a home cook now, but every time I learn a new recipe from a professional, I also try to add something from my own, create a new recipe from it. Obviously I also have some recipes 100% from my creation.',
        '/assets/image/resized/cooking9.jpg',
        '/assets/image/resized/cooking.gif'
      ),
    ],

    projects: [
      new Card(
        'WoodFood',
        'As I mentioned it in my About me section, I love cooking so much. That is why I decided last year to create a recipe book Android application for one of my school project. Here can the user save the recipes they like, and they can add new recipes to the book, or delete them too. ',
        '/assets/image/resized/woodfood.jpg',
        '/assets/image/resized/woodfood.jpg'
      ),
      new Card(
        'Poly City',
        'This is my final work at University. This is city building application, which will be supplemented with a game function, where every type of buildings will have an effection on the city life, such as happiness or purchase request. I use my own models for the city building. I wrote this application in ThreeJs, JavaScript.  ',
        '/assets/image/resized/polycity33.png',
        '/assets/image/resized/polycity.gif'
      ),
      new Card(
        'Railway station',
        'One year ago I build a railway station in ThreeJs. This was one of my favourit project from school, I really enjoyed modeling tha train and the little ghost bunny for it. The different switchable lights, the moving fountain and the materials are also make this station so realistic. I think I am the most proud of this work from myself.',
        '/assets/image/resized/station.png',
        '/assets/image/resized/station.png',
        '/assets/projects/station/FejesKrisztina_VPGOPE.html'
      ),
      new Card(
        'Minesweeper',
        'Instead of creating a normal minesweeper, I decided to make the story a little cuter. In my minesweeper you have to plant trees, and if you dig the little Krteks hole, you loose. Your score is equal to the number of the planted trees',
        '/assets/image/resized/minesweeper2.png',
        '/assets/image/resized/minesweeper2.png',
        '/assets/projects/minesweeper/index.html'
      ),
      new Card(
        'Bringo',
        'In my 5th semester I was part of a school project, where we designed and created a web application for food ordering. I was responsible for the design, so I wrote the css, designed the logo and had a few changes in the html file too.',
        '/assets/image/resized/bringo.png',
        '/assets/image/resized/bringo2.png'
      ),
      new Card(
        'Gardening shop',
        'In a school project, me, and my partner created a web application for a gardening shop. I was responsible for the frontend work and design.  I am not very proud of this work, because I had very short time for it, and there were a lot of details to work on.',
        '/assets/image/resized/krtek.jpg',
        '/assets/image/resized/krtek.jpg'
      ),
      new Card(
        'Toak',
        'During my preparation for work, I made a fully functional chat application in Angular, using Firestore.',

        '/assets/image/toaklogo2.png',
        '/assets/image/toakpage2.png'
      ),
    ],

    contacts: [
      new Card(
        'Phone number',
        '+36 30 616 6172',
        '/assets/image/call.png',
        '/assets/image/call.png'
      ),
      new Card(
        'Email',
        'kriszta1062@gmail.com',
        '/assets/image/email.png',
        '/assets/image/email.png'
      ),
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
