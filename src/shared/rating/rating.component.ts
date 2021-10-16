import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  maxRating = environment.maxRating;
  rating: number | undefined;

  constructor(private ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  rateContent() {
    console.log(this.rating);
    this.ref.close(this.rating)
  }
}
