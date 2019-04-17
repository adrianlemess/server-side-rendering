import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { HelloWorldService } from './hello-world.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-ssr';
  posts: Post[] = [];

  constructor(private helloWorldService: HelloWorldService) {
    console.log('Constructor do app');
  }

  ngOnInit() {
    console.log('Constructor do ngOnInit');

    this.helloWorldService.getPosts()
      .pipe(
        take(1)
      )
      .subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
      });
  }
}
