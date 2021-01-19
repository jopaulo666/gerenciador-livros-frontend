import { Livro } from './../livro';
import { Component, OnInit } from '@angular/core';
import { LivrosService } from 'src/app/livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {

  livros: Livro[] = [];

  constructor(private service: LivrosService, private router: Router) { }

  ngOnInit(): void {
    this.service.getLivros().subscribe(resposta => this.livros = resposta); 
  }

  novoCadastro(){
    this.router.navigate(['/livros-form'])
  }

}
