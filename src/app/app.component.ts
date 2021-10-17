import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaContent } from 'src/shared/models/media-content';
import { debounceTime, distinctUntilChanged, merge, switchMap } from 'rxjs/operators';
import { MediaService } from './media.service';
import { MediaType } from 'src/shared/enums/media-type';
import { Observable } from 'rxjs';

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

  movies: MediaContent[] = [];

  tvShows: MediaContent[] =  [];

  mediaList: MediaContent[] = this.movies;

  constructor(private searchService: MediaService) {}

  ngOnInit() {
    this.searchService.search().subscribe(res => {
      this.movies = this.getContent(res, MediaType.movie);
      this.tvShows = this.getContent(res, MediaType.tvShow);
    });

    this.searchInput.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(), 
      switchMap(text => this.searchService.search(text))
    ).subscribe(res => {
      this.movies = this.getContent(res, MediaType.movie);
      this.tvShows = this.getContent(res, MediaType.tvShow);
    });
  }

  focus(moviesFocused: boolean, tvShowsFocused: boolean) {
    this.moviesFocused = moviesFocused;
    this.tvShowsFocused = tvShowsFocused;
    this.mediaList = this.moviesFocused ? this.movies : this.tvShows;
  }

  private getContent(mediContents: MediaContent[], type: string) {
    return mediContents.filter(x => x.type.key === type);
  }

  public rate(value: number, id: number): Observable<number> {
    return this.searchService.rate(value, id);
  }
}
