import { Component, Input, OnInit } from '@angular/core';
import { MediaContent } from 'src/shared/models/media-content';
import { DialogService } from 'primeng/dynamicdialog';
import { MediaDetailsComponent } from './media-details/media-details.component';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
  @Input()
  mediaContent!: MediaContent;

  currentRating: number | undefined;

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openDetailsDialog(mediaContent: MediaContent) {
    this.dialogService.open(MediaDetailsComponent, {
      width: "50%",
      style: { padding: "0 1.5rem" },
      data: {
        mediaContent
      }
    });
  }
}
