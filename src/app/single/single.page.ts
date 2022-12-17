import { Component, OnInit } from '@angular/core';
import { WordPressService } from '../wordpress.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})

export class SinglePage implements OnInit {

  postInfo: any;
 
  constructor(
    private actRoute: ActivatedRoute, 
    private wpService: WordPressService, 
  ) { }
 
  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.wpService.single(id)
    .subscribe((item) => {
      this.postInfo = item;
    });
  }
 
  visitRealPost() {
    window.open(this.postInfo.link, '_blank');
  }  

}
