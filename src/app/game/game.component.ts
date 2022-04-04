import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  template: `
    <p>
      game works!
    </p>
    <a routerLink="/sudoku">Sudoku</a>
<a routerLink="/wordle">Wordle  </a>
<a routerLink="/ticiac">Ticiac  </a>
  `,
  styles: [
  ]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
