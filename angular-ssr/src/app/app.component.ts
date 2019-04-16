import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-ssr';
  posts: Post[] = [];

  constructor(private helloWorldService: HelloWorldService) {
  }

  ngOnInit() {
    this.helloWorldService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }
}
