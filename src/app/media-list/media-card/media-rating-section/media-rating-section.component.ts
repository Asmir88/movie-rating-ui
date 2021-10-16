import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MediaContent } from 'src/shared/models/media-content';
import { RatingComponent } from 'src/shared/rating/rating.component';

@Component({
  selector: 'app-media-rating-section',
  templateUrl: './media-rating-section.component.html',
  styleUrls: ['./media-rating-section.component.scss']
})
export class MediaRatingSectionComponent implements OnInit {
  @Input()
  mediaContent!: MediaContent;

  currentRating: number | undefined;
  
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openRatingDialog() {
    const ref = this.dialogService.open(RatingComponent, {
      header: `Rate "${this.mediaContent?.title}"`,
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
