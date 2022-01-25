//importing the interface
import { Tweet } from './../interfaces/tweet';
import { Component, OnInit } from '@angular/core';
//Importing the service
import{TweetSupplierService} from '../services/tweetSupplier.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[] = [];
  name:string="TheRealDonaldDuck";
  //Initializing the service
  constructor(private tweetsService: TweetSupplierService) { }

  ngOnInit(): void {
    //Getting the tweets from the service and adding them to the array tweets
    this.tweetsService.requestTweets().subscribe((tweet:Tweet[])=>{
      next: this.tweets = tweet;
    });
  }

}
