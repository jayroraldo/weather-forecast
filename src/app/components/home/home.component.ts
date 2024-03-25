import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { categories } from '../../sampleData/categories.data';
import { AuthenticationService } from '../../services/authentication.service';
import { LoadingComponent } from '../../shared/component/loading/loading.component';
import { Category } from '../../types/category.type';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { HeaderComponent } from './components/header/header.component';

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

  constructor(private router: Router, public auth: AuthenticationService) {}

  onCategoryClicked(categoryId: number): void {
    categories.find((category: Category) => {
      if (category.id === categoryId) {
        this.router.navigateByUrl('/' + category.category.toLowerCase());
      }
    });
  }
}
