import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../core/models/Button';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  postsButton: Button = {
    text: 'Posts',
    backgroundColor: '#199B84',
    route: 'posts'
  }

  aboutButton: Button = {
    text: 'About me',
    backgroundColor: '#556EDB',
    route: 'about'
  }

  constructor(private router: Router) { }

  onNavigateToPosts(event: boolean) {
    if (event) {
      this.router.navigate(['posts']).then();
    }
  }

  onNavigateToAbout(event: boolean) {
    if (event) {
      this.router.navigate(['about']).then();
    }
  }

}
