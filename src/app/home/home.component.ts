import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  words = [
    'Hello World!',
    'My name is Alessio Cerullo!',
    'Welcome to my World!',
  ];
  part = '';
  i = 0;
  offset = 0;
  len = this.words.length;
  forwards = true;
  skipCount = 0;
  skipDelay = 20;
  speedDuration = 150;
  constructor() { }

  ngOnInit(): void {
    this.wordFlick();
    console.log('Testing');
  }

  wordFlick() {
    setInterval(() => {
      console.log('Interval running ');
      if (this.forwards) {
        if (this.offset >= this.words[this.i].length) {
          this.skipCount++;
          if (this.skipCount === this.skipDelay) {
            this.forwards = false;
            this.skipCount = 0;
          }
        }
      } else {
        if (this.offset === 0) {
          this.forwards = true;
          this.i++;
          this.offset = 0;
          if (this.i >= this.len) {
            this.i = 0;
          }
        }
      }
      this.part = this.words[this.i].substr(0, this.offset);
      if (this.skipCount === 0) {
        if (this.forwards) {
          this.offset++;
        } else {
          this.offset--;
        }
      }
      const wordElement = document.querySelector('.title');
      if (wordElement) {
        wordElement.textContent = this.part;
      }
    }, this.speedDuration);
  }
}
