import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MediaCardComponent } from './media-card/media-card.component';
import { MediaListComponent } from './media-list.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { MediaDetailsComponent } from './media-card/media-details/media-details.component';
import { MediaRatingSectionComponent } from './media-card/media-rating-section/media-rating-section.component';

@NgModule({
  declarations: [
    MediaCardComponent,
    MediaListComponent,
    MediaDetailsComponent,
    MediaRatingSectionComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    MenuModule
  ],
  providers: [
    DialogService 
  ],
  exports: [
    MediaListComponent
  ]
})
export class MediaListModule { }
