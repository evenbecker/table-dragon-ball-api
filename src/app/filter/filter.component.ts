import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
@Output() filterNameChange = new EventEmitter<string>();
        filterName = '';

    onFilterNameChange(): void {

    this.filterNameChange.emit(this.filterName);
  }

}
