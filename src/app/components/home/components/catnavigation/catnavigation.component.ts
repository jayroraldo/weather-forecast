import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { categories } from '../../../../sampleData/categories.data';
import { Category } from '../../../../types/category.type';

@Component({
  selector: 'app-catnavigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.scss',
})
export class CatnavigationComponent {
  @Output() categoryClicked: EventEmitter<number> = new EventEmitter<number>();
  categories: Category[] = categories;

  constructor() {}

  onCategoryClicked(category: Category): void {
    this.categoryClicked.emit(category.id);
  }
}
