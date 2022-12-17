import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class WordPressService {

  API_URL = `https://www.katyperry.com/wp-json/wp/v2/`;
  allBlogs = null;
  pages: any;
 
  constructor( private http: HttpClient ) { }
 
  fetchData(page = 1): Observable<any[]> {
    let options = {
      observe: "response" as 'body',
      params: {
        per_page: '5',
        page: ''+page
      }
    };
 
    return this.http.get<any[]>(`${this.API_URL}posts?_embed`, options)
    .pipe(
      map((response) => {
        this.pages = response['headers'].get('x-wp-totalpages');
        this.allBlogs = response['headers'].get('x-wp-total');
        return response['body'];
      })
    )
  }
 
  single(id) {
    return this.http.get(`${this.API_URL}posts/${id}`)
    .pipe(
      map((data) => {
        return data;
      })
    )
  }

}
