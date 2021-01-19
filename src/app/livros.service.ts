import { Livro } from './livros/livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor( private http: HttpClient ) {
    
   }

   salvar (livro: Livro) : Observable<Livro> {
     return this.http.post<Livro>('http://localhost:8080/api/livros', livro);
   }

   atualizar (livro: Livro) : Observable<any> {
    return this.http.put<Livro>(`http://localhost:8080/api/livros/${livro.id}`, livro);
  }
   
   getLivros() : Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:8080/api/livros');
  }

  getLivrosById(id: number) : Observable<Livro> {
    return this.http.get<any>(`http://localhost:8080/api/livros/${id}`);
  }
  
}
