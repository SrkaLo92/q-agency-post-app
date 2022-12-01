import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/core/models/Button';
import { Comment } from 'src/app/core/models/Comment';
import { Post } from 'src/app/core/models/Post';
import { User } from 'src/app/core/models/User';
import { CommentsService } from 'src/app/core/services/comments.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() postData!: Post;
  readMoreButton: Button = {
    text: 'Read more',
    backgroundColor: '#199B84',
  };

  openCommentsButton: Button = {
    text: '',
    backgroundColor: '#556EDB',
  };

  closeCommentsButton: Button = {
    text: 'Close',
    backgroundColor: 'red',
  };

  user!: User | null;
  comments: Comment[] = [];
  commentsOpened: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private commentService: CommentsService
  ) {}

  ngOnInit(): void {
    this.userService.getUserById(this.postData.userId).subscribe({
      next: (user: User) => (this.user = user),
      error: () => console.log('Error'),
    });
    this.commentService.getComments(this.postData.id).subscribe({
      next: (comments: Comment[]) => {
        this.comments = comments;
        this.openCommentsButton.text = `Comments (${this.comments.length})`;
      },
      error: () => console.log('Error'),
    });
  }

  onButtonClicked() {
    this.router.navigate(['post', this.postData.id]).then();
  }

  onOpenComments() {
    this.commentsOpened = !this.commentsOpened;
  }

  onCloseComments() {
    this.commentsOpened = false;
  }
}
