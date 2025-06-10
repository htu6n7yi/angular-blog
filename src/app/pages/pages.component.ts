import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../data/dataFake';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  photoCover: string = "";
  cardTitle: string = "";
  cardDescription: string = "";

  trailer: string = "https://www.youtube.com/embed/T3T-evQZiQo";
  private id: string | null = "0";


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      console.log('ID from URL:', this.id); // Log do ID
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null): void {
    console.log('ID passed to setValuesToComponent:', id); // Log do ID passado para a função
    console.log('DataFake:', dataFake); // Log dos dados

    const result = dataFake.filter(article => article.id === id)[0];
    console.log('Result:', result); // Log do resultado

    if (result) {
      this.cardTitle = result.title;
      this.cardDescription = result.description;
      this.photoCover = result.photoCover;
      this.trailer = result.trailer || '';
      console.log('Article ID:', result.id);
    } else {
      console.error('Article not found');
    }
  }

}
