import { Injectable } from '@angular/core';
import { Character } from '../interfacez/character.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character:Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 15000
  },{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];

  addNewCharacter(character:Character):void {

    const newCharacter = {id: uuid(), ...character };

    this.character.push(newCharacter);
  }

  deleteCharactervById(id:string):void {
    this.character = this.character.filter(character => character.id !== id);
  }


}
