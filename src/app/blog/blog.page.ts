import { Component, OnInit } from '@angular/core';
import { WordPressService } from '../wordpress.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})

export class BlogPage implements OnInit {

  WpItems = [];
  blogCount = null;
  page = 1;
 
  constructor(
    private wordpress: WordPressService, 
    private loadingCtrl: LoadingController
  ) { }
 
  ngOnInit() {
    this.getWpData();
  }
 
  async getWpData() {
    let loading = await this.loadingCtrl.create({
      message: 'Data Loading ...'
    });
 
    await loading.present();
 
    this.wordpress.fetchData().subscribe((data) => {
      this.blogCount = this.wordpress.allBlogs;
      this.WpItems = data;
      loading.dismiss();
    });
  }
 
  loadData(e) {
    this.page++;
 
    this.wordpress.fetchData(this.page)
      .subscribe((data) => {
      this.WpItems = [...this.WpItems, ...data];
      e.target.complete();
      if (this.page == this.wordpress.pages) {
        e.target.disabled = true;
      }
    });
  }

}
