import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll-example',
  templateUrl: './infinite-scroll-example.component.html',
  styleUrls: ['./infinite-scroll-example.component.scss']
})
export class InfiniteScrollExampleComponent implements OnInit {
  linesToWrite: Array<string>;

  finishPage = 5;
  actualPage: number;
  showGoUpButton: boolean;

  showScrollHeight = 400;
  hideScrollHeight = 200;
  
  constructor() {
    this.linesToWrite = new Array<string>();
    this.add40lines();

    this.actualPage = 1;
    this.showGoUpButton = false;
  }

  ngOnInit(): void {
  }

  add40lines() {
    const line = 'Another new line -- ';
    let lineCounter = this.linesToWrite.length;
    for (let i = 0; i < 40; i++) {
      this.linesToWrite.push(line + lineCounter);
      lineCounter++;
    }
  }

  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.add40lines();
      this.actualPage++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }
}
