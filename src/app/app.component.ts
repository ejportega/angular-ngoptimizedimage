import { Component, OnInit } from '@angular/core';

interface Image {
  id: number;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngoptimizedimage';

  imageList: Image[] = [];

  ngOnInit(): void {
    for (let i=0; i<30; i++) {
      this.imageList.push({
        id: i+1,
        url:`${i+1}-unsplash.jpg`
        // url:`https://ik.imagekit.io/ejortega/${i+1}-unsplash.jpg`
      })
    }
  }
}
