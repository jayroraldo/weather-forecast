import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from '../login/login.component';
import { LoadingComponent } from '../../shared/component/loading/loading.component';
import { Router, RouterOutlet } from '@angular/router';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { Category } from '../../types/category.type';
import { categories } from '../../sampleData/categories.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    LoadingComponent,
    AsyncPipe,
    RouterOutlet,
    CatnavigationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: Category[] = categories;

  constructor(private router: Router, public auth: AuthService) {}

  onCategoryClicked(categoryId: number): void {
    categories.find((category: Category) => {
      if (category.id === categoryId) {
        this.router.navigateByUrl('/' + category.category.toLowerCase());
      }
    });
  }
}
