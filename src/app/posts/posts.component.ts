import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public posts = [
    {
      title: 'So much news!!!',
      date: 1460505600000,
      body: 'Hey again everyone! It’s been over 4 months since my last post and there have been many changes since then. After my post on my 30th birthday my wife surprised me later that night with news that she was pregnant! Since that news I have managed to organize free medical care for my wife through BC Women’s Hospital and their New Beginnings program which is for people living in BC who don’t have medical coverage. My wife is now 23 weeks pregnant as of today and our baby girl is very healthy so far. As for getting medical coverage for me and my wife, we will hopefully both be on MSP starting in this or next month as I applied 3 weeks ago.'
    },
    {
      title: 'I’m 30!',
      date: 1448496000000,
      body: 'It’s been over 4 months since my last post and today is my 30th birthday. I was reflecting back on the last few years of my life since I began traveling and I am quite proud of what I have accomplished and how my life has gone thus far. I’m also very excited to begin my thirties and a new chapter in my life. My wife and I have been settled in Vancouver now for nearly 7 months and everyday together with her has been a great day, even the not-so-great ones. Just last week we finally finished her immigration application for permanent residence and an open work permit. I started working on these documents back in early April but because of a lot of laziness on both our parts we didn’t finish them until just recently. Now we need to wait 3-5 months for her to get her open work permit which will give her 2 years to legally work in Canada. Medical coverage is another story and I don’t think she will have that for another 3-6 months because of BC’s silly laws.'
    }
  ];
}
