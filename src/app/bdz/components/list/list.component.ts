import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfacez/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  @Input()
  public charactersList: Character[] = [
    {
      name: 'Trunks',
      power: 10000
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharater(id?:string):void {

    if (!id) return;

    this.onDelete.emit(id);
  }

}
