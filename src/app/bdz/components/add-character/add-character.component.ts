import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfacez/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {
    console.log(this.newCharacter);
    if (this.newCharacter.name.length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {name: '', power: 0}
  }
}
