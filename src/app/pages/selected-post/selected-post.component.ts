import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/Post';
import { Comment } from 'src/app/core/models/Comment';
import { switchMap, tap } from 'rxjs/operators';
import { CommentsService } from 'src/app/core/services/comments.service';
import { PostService } from 'src/app/core/services/post.service';


@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.scss']
})
export class SelectedPostComponent implements OnInit {
  post!: Post;
  comments: Comment[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private commentService: CommentsService) { }

  ngOnInit(): void {
    this.postService.getPostById(this.activatedRoute.snapshot.params['id']).pipe(
      tap((post: Post) => this.post = post),
      switchMap((post: Post) => this.commentService.getComments(post.id))
    ).subscribe({
      next: (comments: Comment[]) => {
        this.comments = comments;
      }
    })
  }

}
