import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaContent } from 'src/shared/models/media-content';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movie-rating-ui';
  moviesFocused = true;
  tvShowsFocused = false;
  searchInput = new FormControl();

  movies = [
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "James bond",
      description: "A movies about spy agent 007 - James Bond",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    }
  ];

  tvShows =  [
    {
      title: "Games of thrones",
      description: "A tv show about dragons",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    },
    {
      title: "Games of thrones",
      description: "A tv show about dragons",
      cast: [ "James bond actor", "Enemy actor"],
      yearReleased: 1999,
      rating: 4.5,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX140_CR0,0,140,207_.jpg"
    }
  ];

  mediaList: MediaContent[] = this.movies;

  ngOnInit() {
    this.searchInput.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(text => {
      console.log("Input ", text);
    });;
  }

  focus(moviesFocused: boolean, tvShowsFocused: boolean) {
    this.moviesFocused = moviesFocused;
    this.tvShowsFocused = tvShowsFocused;
    this.mediaList = this.moviesFocused ? this.movies : this.tvShows;
  }
}
