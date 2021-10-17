import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MediaContent } from 'src/shared/models/media-content';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  search(text?: string): Observable<MediaContent[]> {
    return this.http.get<MediaContent[]>(`${environment.api}/media/${text ? text : ""}`);
  }

  rate(value: number, id: number): Observable<number> {
    return this.http.post<number>(`${environment.api}/media/rate/${id}`, { value, mediaId: id });
  }
}

