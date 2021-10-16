import { Component } from '@angular/core';
import { MediaContent } from 'src/shared/models/media-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-rating-ui';
  moviesFocused = true;
  tvShowsFocused = false;

  movies = [
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    }
  ];

  tvShows =  [
    {
      title: "Games of thrones",
      description: "A tv show about dragons",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    },
    {
      title: "Games of thrones",
      description: "A tv show about dragons",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5
    }
  ];

  mediaList: MediaContent[] = this.movies;

  focus(moviesFocused: boolean, tvShowsFocused: boolean) {
    this.moviesFocused = moviesFocused;
    this.tvShowsFocused = tvShowsFocused;
    this.mediaList = this.moviesFocused ? this.movies : this.tvShows;
  }
}
