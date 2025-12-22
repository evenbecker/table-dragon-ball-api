import { Component, inject, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
//import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent  implements OnInit {
 dragonballServices = inject(CharacterService);
  
  characters: Character[] = [];
  dataSource: { id: number; name: string; race: string }[] = [];
    displayedColumns: string[] = ['id', 'name', 'race'];
  currentPage = 1;
  totalPages = 1;
pageSize = 10;
  isLoading = false;

    constructor(  
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page:number = 1) {
    this.dragonballServices.getCharacters(page).subscribe(response => {
      this.characters = response.items;
      this.dataSource[0] = this.characters[0];
      this.dataSource[1] = this.characters[1];
      this.dataSource[2] = this.characters[4];
         this.currentPage = response.meta.currentPage;
      this.totalPages = response.meta.totalPages;
    
    });
  }
     nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadCharacters(this.currentPage + 1)
    }
  }

  previousPage() {
    if(this.currentPage > 1) {
      this.loadCharacters(this.currentPage -1)
    }
  }
  
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCharacters(this.currentPage + 1);
  }
    navigateToDetail(id: number): void {
    this.router.navigate(['/characters', id]);
  }
}
