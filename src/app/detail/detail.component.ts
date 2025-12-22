import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';

import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  characterSolo: Character | any;
  infos: Character[] = [];


  activatedRoute = inject(ActivatedRoute);
  charactersServices = inject(CharacterService);


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = String(params.idcharacter);
      this.characterSolo = this.charactersServices.getCharacterId(id).subscribe((response) => {
        this.characterSolo = response;
        this.infos = [response];
      
      })
    })
  }
}
