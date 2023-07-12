import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-tic-tac-toe',
templateUrl: './tic-tac-toe.component.html',
styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
board: string[][] = [
['', '', ''],
['', '', ''],
['', '', ''],
];

currentPlayer: string = 'X';
gameOver: boolean = false;
winner: string = '';

ngOnInit(): void {
}

makeMove(row: number, col: number): void {
if (this.board[row][col] !== '' || this.gameOver) {
return;
}

this.board[row][col] = this.currentPlayer;
this.checkGameOver();

if (!this.gameOver) {
this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
}
}

checkGameOver(): void {
// Check rows
for (let i = 0; i < 3; i++) {
if (this.board[i][0] !== '' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
this.gameOver = true;
this.winner = this.board[i][0];
return;
}
}

// Check columns
for (let i = 0; i < 3; i++) {
if (this.board[0][i] !== '' && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
this.gameOver = true;
this.winner = this.board[0][i];
return;
}
}

// Check diagonals
if (this.board[0][0] !== '' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
this.gameOver = true;
this.winner = this.board[0][0];
}

if (this.board[0][2] !== '' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
this.gameOver = true;
this.winner = this.board[0][2];
}

// Check for tie
if (!this.board.flat().includes('')) {
this.gameOver = true;
this.winner = 'Tie';
}
}

resetBoard(): void {
this.board = [
['', '', ''],
['', '', ''],
['', '', ''],
];
this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
this.gameOver = false;
this.winner = '';
}
}
