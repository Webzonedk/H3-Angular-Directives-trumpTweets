//importing the interface
import { Tweet } from './../interfaces/tweet';
import { Component, OnInit } from '@angular/core';
//Importing the service
import { TweetSupplierService } from '../services/tweetSupplier.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})

//adding variables to be used
export class TweetsComponent implements OnInit {
  tweets: Tweet[] = [];
  name: string = "@TheRealDonaldDuck";
  show: boolean = false;
  buzzWords: string[] = ["Fake", "fake"];
  thisIsSensored: string = "Denne besked er sensorerer, da den indeholder falsk information, og derfor er sensoreret af det diktatoriske Sociale medie!";

  //Initializing the service
  constructor(private tweetsService: TweetSupplierService) { }

  ngOnInit(): void {
    //Getting the tweets from the service and adding them to the array tweets
    this.tweetsService.requestTweets().subscribe((tweet: Tweet[]) => {
      next: this.tweets = tweet;
    });
  }
  //Method to filter buzzWords from the text and add sensorship when those words occur in the text
  checkBuzzWords(index: number): boolean {
    let tweet: string = this.tweets[index].text;

    for (let i = 0; i < this.buzzWords.length; i++) {
      if (!tweet.includes(this.buzzWords[i])) {
        this.show = true;
      }
      if (tweet.includes(this.buzzWords[i])) {
        i = this.buzzWords.length;
        this.show = false;
      };
    }
    return this.show;
  }
}



