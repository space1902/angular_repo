import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  public heroDeleted?: string;

  removeLastHero(): void {
    this.heroDeleted = this.heroes.pop();
  }

}
