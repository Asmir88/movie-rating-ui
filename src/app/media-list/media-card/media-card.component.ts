import { Component, Input, OnInit } from '@angular/core';
import { MediaContent } from 'src/shared/models/media-content';
import { DialogService } from 'primeng/dynamicdialog';
import { RatingComponent } from 'src/shared/rating/rating.component';

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

  openRatingDialog() {
    const ref = this.dialogService.open(RatingComponent, {
      header: `Rate this\n"${this.mediaContent?.title}"`,
      width: '300px'
    });

    ref.onClose.subscribe((rating: number) =>{
      if (rating) {
          console.log(rating);
          this.currentRating = rating;
      }
  });
  }
}
