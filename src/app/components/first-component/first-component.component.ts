import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit{

  name: string = 'Thompson';
  age: number = 39;
  job = 'Developer';
  hobbies: string[] = ['Jogging', 'Watch movies', 'Play videogame'];

  constructor() {}

  ngOnInit(): void {
    
  }
}
