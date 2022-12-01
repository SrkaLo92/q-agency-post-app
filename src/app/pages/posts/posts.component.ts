import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/Post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  preloader: boolean = true;
  currentPage: number = 1;
  itemsPerPage: number = 9;
  numberOfPages: number[] = [];
  totalPosts!: number;
  searchText = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts(this.currentPage, this.itemsPerPage);
  }

  onPageClick(page: number) {
    this.currentPage = page;
    this.getPosts(page, this.itemsPerPage);
  }

  getPosts(currentPage: number, itemsPerPage: number) {
    this.postService.getPosts(currentPage, itemsPerPage).subscribe({
      next: (response: any) => {
        this.posts = response.body;
        this.totalPosts = response.headers.get('X-Total-Count');
        this.numberOfPages = [];
        for (
          let i = 1;
          i <= Math.ceil(this.totalPosts / this.itemsPerPage);
          i++
        ) {
          this.numberOfPages.push(i);
        }
      },
      complete: () => (this.preloader = false),
      error: (err) => console.log(err),
    });
  }
}
