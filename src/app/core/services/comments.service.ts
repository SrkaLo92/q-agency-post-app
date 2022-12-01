import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getComments(postId: number) {
    return this.http.get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`);
  }
}
