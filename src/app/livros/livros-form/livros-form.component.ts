import { Livro } from './../livro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {

  livro: Livro;

  constructor() { }

  ngOnInit(): void {
  }

}