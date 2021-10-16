import { Component, Input, OnInit } from '@angular/core';
import { MediaContent } from 'src/models/media-content';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
  @Input()
  mediaContent: MediaContent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
