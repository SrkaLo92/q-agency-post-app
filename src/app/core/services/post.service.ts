import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts(page?: number, perPage?: number) {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?_page=${page}&_limit=${perPage}`, {observe: 'response'});
  }

  getPostById(postId: number): Observable<any> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${postId}`);
  }
}
