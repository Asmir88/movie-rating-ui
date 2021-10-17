import { Component, Input, OnInit } from '@angular/core';
import { MediaContent } from 'src/shared/models/media-content';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  @Input()
  mediaList!: MediaContent[];

  constructor() { }

  ngOnInit(): void {
  }

}
