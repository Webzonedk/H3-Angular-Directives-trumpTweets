import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../interfaces/tweet';

@Injectable({
  providedIn: 'root'
})

export class TweetSupplierService {


  constructor(private http: HttpClient) { }

//Service with observable, to provide data from the Json file with the tweets
  requestTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>('./assets/data/trumpTweets.json');
  }
}
