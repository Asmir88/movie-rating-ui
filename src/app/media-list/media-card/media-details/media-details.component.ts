import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MediaService } from 'src/app/media.service';
import { MediaContent } from 'src/shared/models/media-content';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {
  mediaContent!: MediaContent;
  cast: string = "";

  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.mediaContent = this.config.data.mediaContent;
    this.cast =  this.mediaContent.actors.map(x => x.name + " " + x.surname).join(", ");
  }

}
