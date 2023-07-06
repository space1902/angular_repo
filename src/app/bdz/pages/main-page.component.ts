import { Component} from '@angular/core';
import { Character } from '../interfacez/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) {
  }
  get character(): Character[]{
    return [...this.dbzService.character];
  }

  deleteCharacterv(id: string): void {
    this.dbzService.deleteCharactervById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addNewCharacter(character);
  }
}
